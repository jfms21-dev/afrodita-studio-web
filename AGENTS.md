<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep TanStack Start file-based routes and the shared SiteLayout; this preserves navigation and reusable page structure.
- Use standard Vite, React, Tailwind and Nitro plugins, not a platform-specific wrapper; independent builds must use public packages only.
- Prerender every corporate route explicitly, share one explicit intermediate public directory between Start and Nitro, and export validated resolved client output to dist in the final Vite buildApp hook; stage outside dist before replacing it so nested sources are not deleted and direct Vite builds produce server-free static files.
- Keep fonts bundled through Fontsource and photographs in public; required visual resources must ship with the website.
- Keep contact as telephone and WhatsApp links unless a real receiver is configured; never simulate a successful message submission.
