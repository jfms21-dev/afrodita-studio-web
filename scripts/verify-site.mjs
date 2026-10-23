import assert from "node:assert/strict";
import { images, localReferences, pages } from "./site-manifest.mjs";

const argument = process.argv[2];
if (!argument) throw new Error("Usage: bun run verify:site -- https://YOUR-PROJECT.pages.dev");
const origin = new URL(argument);
assert.ok(["http:", "https:"].includes(origin.protocol));
const assets = new Set(images.map((image) => `/${image}`));
for (const page of pages) {
  const response = await fetch(new URL(page.path, origin), { signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, `Route failed: ${page.path}`);
  const html = await response.text();
  assert.ok(html.includes(page.title), `Wrong page or fallback: ${page.path}`);
  assert.ok(!html.includes("<form"), "A form was added; verify its receiver and delivery separately.");
  for (const reference of localReferences(html)) {
    const url = new URL(reference, origin);
    assert.ok(pages.some((entry) => entry.path === url.pathname) || /\.[a-z0-9]+$/i.test(url.pathname), `Unknown internal link: ${reference}`);
    if (!pages.some((entry) => entry.path === url.pathname)) assets.add(url.pathname);
  }
  if (page.path === "/") {
    assert.ok(html.includes("https://wa.me/34682297159?text="), "Missing WhatsApp appointment link");
    assert.ok(html.includes("tel:+34682297159"), "Missing phone link");
    assert.ok(html.includes("https://www.google.com/maps/"), "Missing Google Maps link");
  }
  console.log(`OK page: ${page.path}`);
}
for (const asset of assets) {
  const response = await fetch(new URL(asset, origin), { signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, `Missing resource: ${asset}`);
  assert.ok(!response.headers.get("content-type")?.includes("text/html"), `HTML fallback instead of asset: ${asset}`);
  if (asset.endsWith(".css")) {
    const css = await response.text();
    for (const match of css.matchAll(/url\(["']?([^)'"\s]+)["']?\)/g)) {
      if (match[1].startsWith("data:")) continue;
      const url = new URL(match[1], new URL(asset, origin));
      assert.equal(url.origin, origin.origin, "Font or image is hosted externally");
      assets.add(url.pathname);
    }
  }
}
console.log(`Verified ${pages.length} pages and ${assets.size} resources. No web contact form exists.`);
console.log("Manually check menus, service dialogs and external apps; link checks do not confirm WhatsApp message delivery.");