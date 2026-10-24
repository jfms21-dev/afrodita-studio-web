import { cp, mkdtemp, readFile, readdir, rename, rm, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { images, localReferences, pages } from "./site-manifest.mjs";

export async function exportStaticSite(sourceDirectory, destination = "dist") {
const source = path.resolve(sourceDirectory);
const target = path.resolve(destination);
console.log(`Static export source: ${source}; entries: ${(await readdir(source)).join(", ")}`);
for (const page of pages) {
  const html = await readFile(path.join(source, page.file), "utf8");
  if (!html.includes(page.title) || !html.includes("<body")) {
    throw new Error(`Missing prerendered content: ${page.path}`);
  }
  if (html.includes("<form")) throw new Error("A contact form requires a configured receiver before static deployment.");
  for (const reference of localReferences(html)) {
    const url = new URL(reference, "https://local.invalid");
    if (pages.some((entry) => entry.path === url.pathname)) continue;
    const file = path.resolve(source, `.${decodeURIComponent(url.pathname)}`);
    if (!file.startsWith(source + path.sep)) throw new Error(`Unsafe asset path: ${reference}`);
    if (!(await stat(file)).isFile()) throw new Error(`Missing asset: ${reference}`);
  }
}
for (const image of images) await stat(path.join(source, image));

// Stage outside the target before replacing it: source may be dist/client.
// Removing dist first in that layout destroys the source and causes ENOENT.
const staging = await mkdtemp(path.join(path.dirname(target), ".afrodita-static-"));
try {
  await cp(source, staging, { recursive: true });
  // Never deploy the build-time SSR bundle or a generated Pages function.
  for (const entry of ["_worker.js", "_routes.json", "functions"]) {
    await rm(path.join(staging, entry), { recursive: true, force: true });
  }
  await rm(target, { recursive: true, force: true });
  await rename(staging, target);
} finally {
  await rm(staging, { recursive: true, force: true });
}
console.log(`Static export ready: ${destination}/ (${pages.length} pages, local photos and fonts).`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await exportStaticSite(process.argv[2] ?? ".output/public");
}