import fs from "node:fs";
import path from "node:path";

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

const response = await fetch(
  `${supabaseUrl}/rest/v1/books?select=id,title,cover_url,cover_storage_path`,
  {
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
    },
  },
);

if (!response.ok) {
  throw new Error(`Could not verify books: ${response.status} ${await response.text()}`);
}

const books = await response.json();
const withCover = books.filter((book) => book.cover_url).length;
const withoutCover = books.filter((book) => !book.cover_url);

console.log(`Total books: ${books.length}`);
console.log(`With cover: ${withCover}`);
console.log(`Without cover: ${withoutCover.length}`);

if (withoutCover.length > 0) {
  console.log("Books without cover:");
  for (const book of withoutCover) {
    console.log(`- ${book.title}`);
  }
  process.exit(1);
}