import { access, readFile, readdir, stat } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL("../dist", import.meta.url).pathname;
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => (entry.isDirectory() ? walk(join(directory, entry.name)) : join(directory, entry.name)))
  );
  return files.flat();
}

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function targetCandidates(value) {
  const pathname = decodeURIComponent(value.split("#")[0].split("?")[0]);
  if (!pathname || !pathname.startsWith("/")) return [];
  const local = join(root, pathname);
  if (extname(pathname)) return [local];
  return [local, `${local}.html`, join(local, "index.html")];
}

const htmlFiles = (await walk(root)).filter((file) => file.endsWith(".html"));

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  if (html.includes("{%") || html.includes("{{ site.")) errors.push(`${file}: contains unmigrated Liquid`);
  const references = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  for (const reference of references) {
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(reference)) continue;
    const candidates = targetCandidates(reference);
    const resolved = await Promise.any(
      candidates.map(async (candidate) => {
        if (await exists(candidate)) return true;
        throw new Error();
      })
    ).catch(() => false);
    if (candidates.length && !resolved) errors.push(`${file}: missing ${reference}`);
  }
}

const homepage = await readFile(join(root, "index.html"), "utf8");
const homepageScripts = [...homepage.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)];
const homepageScriptBytes = Buffer.byteLength(homepageScripts.map((match) => match[1]).join(""));
if (homepageScripts.length > 2) errors.push("Homepage performance budget: more than two inline scripts");
if (homepageScriptBytes > 2_000) errors.push("Homepage performance budget: inline JavaScript exceeds 2 KB");
if ((await stat(join(root, "index.html"))).size > 15_000)
  errors.push("Homepage performance budget: HTML exceeds 15 KB");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} HTML files, internal assets, Liquid migration, and homepage budgets.`);
}
