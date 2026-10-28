# Independent hosting

## Requested image and catalog update
- [x] Replace header logo and hero photo, preserve footer logo and favicon.
- [x] Remove location outside explicit hero/footer contact information.
- [x] Rename manicure/pedicure categories and add lashes with complete prices and durations.
- [x] Verify catalog values, service dialogs, images and navigation; save requirements for continuation (74 tests and desktop/mobile browser checks).

## Cloudflare export correction
- [x] Trace installed build lifecycle and resolve actual configuration: Nitro public output is .output/public, not dist/client; historical diagnostics inspected.
- [x] Share an explicit intermediate public directory between Start and Nitro; stage validated export before replacing dist, preserving nested sources.
- [x] Add regression coverage and document Cloudflare configuration; 11 tests pass, all five preview pages and local photographs load without page errors.
- [ ] Inspect complete production artifacts: no production output or Cloudflare build log is available in this sandbox; preview build checks report OK but do not establish a full static build.
- [ ] Verify actual Cloudflare deployment: waiting for its deployed URL.

- [x] Fix direct Vite builds to export validated pages to dist; export regression test added and current checks pass.
- [x] Replace platform-specific runtime/build dependencies with standalone static deployment.
- [x] Keep required images and fonts inside the project; check routes and contact links.
- [x] Document GitHub → Cloudflare Pages setup, local execution, production and contact limitations.
- [x] Run existing tests and verify the website locally (8 tests; five pages, photos, fonts, service dialogs and mobile menu).
- [ ] Verify actual Cloudflare deployment and custom domain: waiting for the owner to connect GitHub in Cloudflare Pages and provide its deployed URL.

## Philosophy section divider icons
- [x] Add a fine-line animated row between the two philosophy paragraphs (bioseguridad, uñas, pestañas).
- [ ] Redraw the first icon as a minimalist rostro con mascarilla higiénica; keep the same thin line and float effect.
- [ ] Confirm the row reads clearly at desktop and mobile size, with tests and build still green.
