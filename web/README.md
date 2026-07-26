# Toddynelson — Vault UI

A static, dependency-free implementation of the Toddynelson command-center dashboard: Dashboard, Product, Ground Truth, Projects, Documents, Chat and Settings over the KOS described in the root [README](../README.md).

No build step. Open `index.html` directly, or serve the folder:

```bash
npx serve web
```

## Structure

- `index.html` — app shell and per-module markup
- `styles.css` — layout + component styles, built on the token files in `tokens/`
- `tokens/` — colors, typography, spacing and motion custom properties
- `app.js` — state, mock data and rendering/interaction logic (sidebar nav, command palette, document search/filter, chat)

Icons via [Lucide](https://lucide.dev) (CDN). All content is mocked client-side; nothing here reads from the `obsidian/` vault yet.
