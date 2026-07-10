# aakashb.xyz

A static Astro portfolio with Git-backed browser publishing through Pages CMS and global delivery through Cloudflare Workers Static Assets.

## Work locally

```bash
nvm use
npm install
npm run dev
```

Run the full production validation with `npm test`. It type-checks the site, builds every route, checks internal links and assets, rejects unmigrated Liquid, and enforces the homepage HTML/JavaScript budget.

## Publish from anywhere

1. Install the [Pages CMS GitHub app](https://github.com/apps/pages-cms) for this repository only.
2. Open [app.pagescms.org](https://app.pagescms.org/), choose the repository, then create or edit an entry under **Writing** or **Projects**.
3. Upload images from the editor. They are stored in `public/img`; content remains Markdown in `src/content`.
4. Save to commit the change. A push to `main` runs validation and deploys only after the build succeeds.

The editor fields and media rules live in `.pages.yml`. The same Markdown can still be edited from an IDE, GitHub, or an AI coding tool.

## Cloudflare setup

The deployment workflow expects these GitHub Actions repository secrets:

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN` with Workers Scripts edit and Workers Routes edit permissions for `aakashb.xyz`

`wrangler.jsonc` deploys the generated `dist` directory as static assets and attaches `www.aakashb.xyz` as the custom domain. Static requests do not invoke Worker code.
