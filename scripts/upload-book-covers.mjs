import fs from "node:fs";
import path from "node:path";

const bucket = "book-covers";
const optimizedDir = path.join(process.cwd(), "assets", "book-covers", "optimized");
const manifestPath = path.join(process.cwd(), "assets", "book-covers", "manifest.tsv");

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

function getContentType(fileName) {
  const extension = path.extname(fileName).toLowerCase();

  if (extension === ".webp") return "image/webp";
  if (extension === ".jpg" || extension === ".jpeg") return "image/jpeg";
  if (extension === ".png") return "image/png";
  if (extension === ".avif") return "image/avif";

  throw new Error(`Unsupported image format: ${fileName}`);
}

function parseManifest(content) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  const header = lines.shift()?.split("\t") ?? [];

  const bookIdIndex = header.indexOf("book_id");
  const titleIndex = header.indexOf("title");
  const fileNameIndex = header.indexOf("file_name");

  if (bookIdIndex === -1 || titleIndex === -1 || fileNameIndex === -1) {
    throw new Error("Manifest must include book_id, title and file_name columns.");
  }

  return lines.map((line) => {
    const columns = line.split("\t");

    return {
      bookId: columns[bookIdIndex],
      title: columns[titleIndex],
      fileName: columns[fileNameIndex],
    };
  });
}

loadEnvFile(path.join(process.cwd(), ".env.local"));
loadEnvFile(path.join(process.cwd(), "apps", "web", ".env.local"));

const supabaseUrl = normalizeSupabaseUrl(requireEnv("NEXT_PUBLIC_SUPABASE_URL"));
const serviceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");

if (!fs.existsSync(manifestPath)) {
  throw new Error(`Manifest not found: ${manifestPath}`);
}

if (!fs.existsSync(optimizedDir)) {
  throw new Error(`Optimized covers directory not found: ${optimizedDir}`);
}

const manifest = parseManifest(fs.readFileSync(manifestPath, "utf8"));

let uploaded = 0;
let missing = 0;
let failed = 0;

for (const item of manifest) {
  if (!item.bookId || !item.fileName) continue;

  const localPath = path.join(optimizedDir, item.fileName);

  if (!fs.existsSync(localPath)) {
    console.log(`MISSING ${item.fileName} -> ${item.title}`);
    missing += 1;
    continue;
  }

  const contentType = getContentType(item.fileName);
  const objectPath = `books/${item.bookId}/${item.fileName}`;
  const bytes = fs.readFileSync(localPath);

  const uploadResponse = await fetch(
    `${supabaseUrl}/storage/v1/object/${bucket}/${objectPath}`,
    {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": contentType,
        "x-upsert": "true",
      },
      body: bytes,
    },
  );

  if (!uploadResponse.ok) {
    console.error(`UPLOAD FAILED ${item.fileName}: ${uploadResponse.status} ${await uploadResponse.text()}`);
    failed += 1;
    continue;
  }

  const publicUrl = `${supabaseUrl}/storage/v1/object/public/${bucket}/${objectPath}`;

  const updateResponse = await fetch(
    `${supabaseUrl}/rest/v1/books?id=eq.${encodeURIComponent(item.bookId)}`,
    {
      method: "PATCH",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        cover_url: publicUrl,
        cover_storage_path: `${bucket}/${objectPath}`,
      }),
    },
  );

  if (!updateResponse.ok) {
    console.error(`DB UPDATE FAILED ${item.fileName}: ${updateResponse.status} ${await updateResponse.text()}`);
    failed += 1;
    continue;
  }

  console.log(`OK ${item.fileName}`);
  uploaded += 1;
}

console.log("");
console.log(`Uploaded: ${uploaded}`);
console.log(`Missing: ${missing}`);
console.log(`Failed: ${failed}`);

if (missing > 0 || failed > 0) {
  process.exit(1);
}