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

  if (!raw) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL is empty.");
  }

  const dashboardMatch = raw.match(/supabase\.com\/dashboard\/project\/([a-z0-9]{20})/i);

  if (dashboardMatch?.[1]) {
    return `https://${dashboardMatch[1]}.supabase.co`;
  }

  const url = new URL(raw);

  if (url.pathname.includes("/rest/v1")) {
    url.pathname = url.pathname.split("/rest/v1")[0] || "/";
  }

  if (url.pathname.includes("/storage/v1")) {
    url.pathname = url.pathname.split("/storage/v1")[0] || "/";
  }

  if (url.pathname.includes("/auth/v1")) {
    url.pathname = url.pathname.split("/auth/v1")[0] || "/";
  }

  url.pathname = "";
  url.search = "";
  url.hash = "";

  return url.toString().replace(/\/$/, "");
}

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokens(value) {
  const stopwords = new Set([
    "the", "a", "an", "and", "of", "to", "for", "with", "in", "on",
    "el", "la", "los", "las", "de", "del", "y", "en", "un", "una",
    "como", "que", "por", "para", "edition", "edicion", "autor",
  ]);

  return normalize(value)
    .split(/\s+/)
    .filter((token) => token.length > 1 && !stopwords.has(token));
}

function scoreMatch(bookTitle, fileName) {
  const bookTokens = new Set(tokens(bookTitle));
  const fileTokens = new Set(tokens(path.basename(fileName, path.extname(fileName))));

  if (bookTokens.size === 0 || fileTokens.size === 0) return 0;

  let intersection = 0;

  for (const token of fileTokens) {
    if (bookTokens.has(token)) {
      intersection += 1;
    }
  }

  const coverageFromFile = intersection / fileTokens.size;
  const coverageFromBook = intersection / bookTokens.size;

  return coverageFromFile * 0.7 + coverageFromBook * 0.3;
}

loadEnvFile(path.join(process.cwd(), ".env.local"));
loadEnvFile(path.join(process.cwd(), "apps", "web", ".env.local"));

const supabaseUrl = normalizeSupabaseUrl(requireEnv("NEXT_PUBLIC_SUPABASE_URL"));
const serviceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");

const coverDir = path.join(process.cwd(), "assets", "book-covers", "optimized");
const manifestPath = path.join(process.cwd(), "assets", "book-covers", "manifest.tsv");
const unmatchedPath = path.join(process.cwd(), "assets", "book-covers", "unmatched.tsv");

if (!fs.existsSync(coverDir)) {
  throw new Error(`Cover directory not found: ${coverDir}`);
}

const files = fs
  .readdirSync(coverDir)
  .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
  .sort();

console.log(`Using Supabase URL: ${supabaseUrl}`);
console.log(`Image files found locally: ${files.length}`);

const booksUrl = `${supabaseUrl}/rest/v1/books?select=id,title,author,category,sort_order&order=sort_order.asc,title.asc`;

const response = await fetch(booksUrl, {
  headers: {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
  },
});

if (!response.ok) {
  throw new Error(`Could not fetch books: ${response.status} ${await response.text()}\nURL used: ${booksUrl}`);
}

const books = await response.json();

const usedFiles = new Set();
const matchedRows = [["book_id", "title", "file_name", "author", "category", "score"].join("\t")];
const unmatchedRows = [["book_id", "title", "author", "category", "best_file", "score"].join("\t")];

for (const book of books) {
  const candidates = files
    .filter((file) => !usedFiles.has(file))
    .map((file) => ({
      file,
      score: scoreMatch(book.title, file),
    }))
    .sort((a, b) => b.score - a.score);

  const best = candidates[0];

  if (best && best.score >= 0.38) {
    usedFiles.add(best.file);

    matchedRows.push(
      [
        book.id,
        book.title,
        best.file,
        book.author ?? "",
        book.category ?? "",
        best.score.toFixed(3),
      ].join("\t"),
    );
  } else {
    unmatchedRows.push(
      [
        book.id,
        book.title,
        book.author ?? "",
        book.category ?? "",
        best?.file ?? "",
        best?.score?.toFixed(3) ?? "0",
      ].join("\t"),
    );
  }
}

fs.writeFileSync(manifestPath, `${matchedRows.join("\n")}\n`, "utf8");
fs.writeFileSync(unmatchedPath, `${unmatchedRows.join("\n")}\n`, "utf8");

console.log("");
console.log(`Books in Supabase: ${books.length}`);
console.log(`Matched covers: ${matchedRows.length - 1}`);
console.log(`Unmatched books: ${unmatchedRows.length - 1}`);
console.log(`Manifest: ${manifestPath}`);
console.log(`Unmatched: ${unmatchedPath}`);

if (unmatchedRows.length > 1) {
  console.log("");
  console.log("Review unmatched.tsv before uploading.");
}