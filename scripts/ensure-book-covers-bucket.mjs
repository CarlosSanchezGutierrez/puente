import fs from "node:fs";
import path from "node:path";

const bucketId = "book-covers";

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, "utf8");

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) continue;

    const separatorIndex = trimmed.indexOf("=");

    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function normalizeSupabaseUrl(rawValue) {
  const raw = String(rawValue ?? "").trim().replace(/^["']|["']$/g, "");
  const url = new URL(raw);

  url.pathname = "";
  url.search = "";
  url.hash = "";

  return url.toString().replace(/\/$/, "");
}

loadEnvFile(path.join(process.cwd(), ".env.local"));
loadEnvFile(path.join(process.cwd(), "apps", "web", ".env.local"));

const supabaseUrl = normalizeSupabaseUrl(requireEnv("NEXT_PUBLIC_SUPABASE_URL"));
const serviceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");

const headers = {
  apikey: serviceRoleKey,
  Authorization: `Bearer ${serviceRoleKey}`,
  "Content-Type": "application/json",
};

console.log(`Using Supabase URL: ${supabaseUrl}`);
console.log(`Ensuring bucket: ${bucketId}`);

const listResponse = await fetch(`${supabaseUrl}/storage/v1/bucket`, {
  headers,
});

if (!listResponse.ok) {
  throw new Error(`Could not list buckets: ${listResponse.status} ${await listResponse.text()}`);
}

const buckets = await listResponse.json();

console.log("Existing buckets:");
for (const bucket of buckets) {
  console.log(`- ${bucket.id}`);
}

const exists = buckets.some((bucket) => bucket.id === bucketId);

if (!exists) {
  const createResponse = await fetch(`${supabaseUrl}/storage/v1/bucket`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      id: bucketId,
      name: bucketId,
      public: true,
      file_size_limit: 5242880,
      allowed_mime_types: [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/avif"
      ]
    }),
  });

  if (!createResponse.ok) {
    throw new Error(`Could not create bucket: ${createResponse.status} ${await createResponse.text()}`);
  }

  console.log(`Bucket created: ${bucketId}`);
} else {
  console.log(`Bucket already exists: ${bucketId}`);
}

const updateResponse = await fetch(`${supabaseUrl}/storage/v1/bucket/${bucketId}`, {
  method: "PUT",
  headers,
  body: JSON.stringify({
    public: true,
    file_size_limit: 5242880,
    allowed_mime_types: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/avif"
    ]
  }),
});

if (!updateResponse.ok) {
  console.warn(`Bucket update warning: ${updateResponse.status} ${await updateResponse.text()}`);
} else {
  console.log(`Bucket configured as public: ${bucketId}`);
}

console.log("Done.");