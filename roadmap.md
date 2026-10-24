# Independent hosting

## Cloudflare export correction
- [ ] Trace the installed build lifecycle and inspect recorded production output.
- [ ] Export from the completed Nitro public directory while preserving all validation and five prerendered routes.
- [ ] Add regression coverage, run available checks, and document Cloudflare configuration.
- [ ] Verify actual Cloudflare deployment: waiting for its deployed URL.

- [x] Fix direct Vite builds to export validated pages to dist; export regression test added and current checks pass.
- [x] Replace platform-specific runtime/build dependencies with standalone static deployment.
- [x] Keep required images and fonts inside the project; check routes and contact links.
- [x] Document GitHub → Cloudflare Pages setup, local execution, production and contact limitations.
- [x] Run existing tests and verify the website locally (8 tests; five pages, photos, fonts, service dialogs and mobile menu).
- [ ] Verify actual Cloudflare deployment and custom domain: waiting for the owner to connect GitHub in Cloudflare Pages and provide its deployed URL.