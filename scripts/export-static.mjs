import { cp, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { images, localReferences, pages } from "./site-manifest.mjs";

export async function exportStaticSite(sourceDirectory, destination = "dist") {
const source = path.resolve(sourceDirectory);
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

await rm(destination, { recursive: true, force: true });
await cp(source, destination, { recursive: true });
// Never deploy the build-time SSR bundle or a generated Pages function.
for (const entry of ["_worker.js", "_routes.json", "functions"]) {
  await rm(path.join(destination, entry), { recursive: true, force: true });
}
console.log(`Static export ready: ${destination}/ (${pages.length} pages, local photos and fonts).`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  await exportStaticSite(process.argv[2] ?? ".output/public");
}