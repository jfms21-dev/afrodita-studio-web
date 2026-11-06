import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { CATEGORY_COVERS, HOME_GALLERY } from "@/data/home-gallery";

describe("Homepage 'Nuestros trabajos' photos", () => {
  it("shows five photos and every file exists", () => {
    expect(HOME_GALLERY).toHaveLength(5);
    for (const photo of HOME_GALLERY) {
      expect(existsSync(resolve(process.cwd(), "public", photo.src.replace(/^\//, "")))).toBe(true);
    }
  });

  it("never repeats a category card cover", () => {
    for (const photo of HOME_GALLERY) {
      expect(CATEGORY_COVERS).not.toContain(photo.src);
    }
  });

  it("excludes the photos that show faces", () => {
    for (const photo of HOME_GALLERY) {
      expect(photo.src).not.toMatch(/lifting-coreano|laminado-cejas/);
    }
  });
});
