import { describe, expect, it } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const read = (file: string) => readFileSync(resolve(process.cwd(), file), "utf8");

describe("Independent corporate hosting", () => {
  it("uses public build packages without a Lovable wrapper", () => {
    const pkg = JSON.parse(read("package.json"));
    expect(Object.keys({ ...pkg.dependencies, ...pkg.devDependencies }).filter((name) => name.startsWith("@lovable.dev/"))).toEqual([]);
    expect(read("vite.config.ts")).not.toContain("@lovable.dev/");
    expect(pkg.scripts.build).toBe("vite build");
  });

  it("keeps all five photographs in the project", () => {
    for (const name of ["maps_01.jpg", "maps_06.jpg", "maps_07.jpg", "maps_08.jpg", "maps_09.jpg"]) {
      expect(existsSync(resolve(process.cwd(), "public", name))).toBe(true);
    }
  });

  it("bundles the original fonts instead of fetching Google Fonts", () => {
    const pkg = JSON.parse(read("package.json"));
    expect(pkg.dependencies["@fontsource-variable/inter"]).toBeDefined();
    expect(pkg.dependencies["@fontsource/cormorant-upright"]).toBeDefined();
    expect(read("src/routes/__root.tsx")).not.toMatch(/fonts\.googleapis\.com|fonts\.gstatic\.com/);
  });
});