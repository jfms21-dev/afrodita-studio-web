import { it, expect, describe } from "vitest";
import { mkdtemp, mkdir, writeFile, readFile, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { exportStaticSite } from "../../scripts/export-static.mjs";
import { pages, images } from "../../scripts/site-manifest.mjs";

it("exports all five pages and assets from the actual client directory without server artifacts", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "afrodita-export-"));
  const source = path.join(root, "client");
  const destination = path.join(root, "dist");
  try {
    for (const page of pages) {
      const file = path.join(source, page.file);
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, `<html><title>${page.title}</title><body><img src="/maps_01.jpg"></body></html>`);
    }
    for (const image of images) await writeFile(path.join(source, image), "fixture");
    await writeFile(path.join(source, "_worker.js"), "server-only");
    await exportStaticSite(source, destination);
    for (const page of pages) expect(await readFile(path.join(destination, page.file), "utf8")).toContain(page.title);
    expect(await readFile(path.join(destination, "maps_01.jpg"), "utf8")).toBe("fixture");
    await expect(stat(path.join(destination, "_worker.js"))).rejects.toMatchObject({ code: "ENOENT" });
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

describe("Cloudflare export replacement", () => {
  async function fixture(source) {
    for (const page of pages) {
      const file = path.join(source, page.file);
      await mkdir(path.dirname(file), { recursive: true });
      await writeFile(file, `<html><title>${page.title}</title><body><img src="/maps_01.jpg"><script src="/assets/client.js"></script></body></html>`);
    }
    for (const image of images) await writeFile(path.join(source, image), image);
    await mkdir(path.join(source, "assets"), { recursive: true });
    await writeFile(path.join(source, "assets/client.js"), "client fixture");
  }

  it("preserves real source files when the source is dist/client inside the destination", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "afrodita-nested-"));
    const destination = path.join(root, "dist");
    const source = path.join(destination, "client");
    try {
      await fixture(source);
      await exportStaticSite(source, destination);
      for (const page of pages) expect((await stat(path.join(destination, page.file))).isFile()).toBe(true);
      for (const image of images) expect(await readFile(path.join(destination, image), "utf8")).toBe(image);
      expect(await readFile(path.join(destination, "assets/client.js"), "utf8")).toBe("client fixture");
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });

  it("rejects a missing local resource without replacing an existing deployment", async () => {
    const root = await mkdtemp(path.join(tmpdir(), "afrodita-invalid-"));
    const source = path.join(root, "public");
    const destination = path.join(root, "dist");
    try {
      await fixture(source);
      await rm(path.join(source, "assets/client.js"));
      await mkdir(destination);
      await writeFile(path.join(destination, "previous.txt"), "keep previous deployment");
      await expect(exportStaticSite(source, destination)).rejects.toMatchObject({ code: "ENOENT" });
      expect(await readFile(path.join(destination, "previous.txt"), "utf8")).toBe("keep previous deployment");
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  });
});