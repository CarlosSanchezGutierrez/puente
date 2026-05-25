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

// Book removed from the catalog:
// "Alas y raices" / Paulo Coelho
const bookId = "f7c16b10-feae-4acc-9668-77d3d8a72782";

const response = await fetch(
  `${supabaseUrl}/rest/v1/books?id=eq.${encodeURIComponent(bookId)}`,
  {
    method: "DELETE",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "return=representation",
    },
  },
);

if (!response.ok) {
  throw new Error(`Could not delete book: ${response.status} ${await response.text()}`);
}

const deleted = await response.json();

console.log(`Deleted rows: ${deleted.length}`);

if (deleted.length === 0) {
  console.log("Book was already deleted or id was not found.");
} else {
  console.log(`Deleted: ${deleted[0].title}`);
}