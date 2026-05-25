import fs from "node:fs";
import path from "node:path";

const roots = ["apps/web/src", "docs", "supabase"];
const extensions = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".css",
  ".sql",
  ".yml",
  ".yaml",
  ".toml",
  ".txt",
]);

const replacements = new Map([
  ["\u00c3\u00a1", "\u00e1"],
  ["\u00c3\u00a9", "\u00e9"],
  ["\u00c3\u00ad", "\u00ed"],
  ["\u00c3\u00b3", "\u00f3"],
  ["\u00c3\u00ba", "\u00fa"],
  ["\u00c3\u0081", "\u00c1"],
  ["\u00c3\u0089", "\u00c9"],
  ["\u00c3\u008d", "\u00cd"],
  ["\u00c3\u0093", "\u00d3"],
  ["\u00c3\u009a", "\u00da"],
  ["\u00c3\u00b1", "\u00f1"],
  ["\u00c3\u0091", "\u00d1"],
  ["\u00c3\u00bc", "\u00fc"],
  ["\u00c3\u009c", "\u00dc"],
  ["\u00c2\u00bf", "\u00bf"],
  ["\u00c2\u00a1", "\u00a1"],
  ["\u00c2\u00b7", "\u00b7"],
  ["\u00c2\u00a9", "\u00a9"],
  ["\u00e2\u20ac\u0153", "\u201c"],
  ["\u00e2\u20ac\u009d", "\u201d"],
  ["\u00e2\u20ac\u02dc", "\u2018"],
  ["\u00e2\u20ac\u2122", "\u2019"],
  ["\u00e2\u20ac\u201c", "\u2013"],
  ["\u00e2\u20ac\u201d", "\u2014"],
  ["\u00e2\u20ac\u00a6", "\u2026"],
  ["\u00e2\u2020\u2019", "\u2192"],
  ["\u00e2\u20ac\u00a2", "\u2022"],
  ["\ufeff", ""],
]);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (
        entry.name === "node_modules" ||
        entry.name === ".git" ||
        entry.name === ".next" ||
        entry.name === ".turbo"
      ) {
        return [];
      }

      return walk(fullPath);
    }

    if (!extensions.has(path.extname(entry.name).toLowerCase())) {
      return [];
    }

    return [fullPath];
  });
}

const files = roots.flatMap(walk);
const changed = [];
const remaining = [];

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  for (const [bad, good] of replacements) {
    content = content.split(bad).join(good);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, "utf8");
    changed.push(file);
  }

  if (/[ÃÂ�]/.test(content) || content.includes("\u00e2")) {
    const lines = content.split(/\r?\n/);
    lines.forEach((line, index) => {
      if (/[ÃÂ�]/.test(line) || line.includes("\u00e2")) {
        remaining.push(`${file}:${index + 1}: ${line}`);
      }
    });
  }
}

console.log(`Changed files: ${changed.length}`);
for (const file of changed) {
  console.log(` - ${file}`);
}

if (remaining.length > 0) {
  console.error("Remaining possible mojibake:");
  for (const line of remaining.slice(0, 80)) {
    console.error(line);
  }
  process.exit(1);
}