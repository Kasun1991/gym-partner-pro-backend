# Worker Setup

## Prerequisites

- [Cloudflare account](https://cloudflare.com)
- Node.js installed
- A fine-grained GitHub PAT with **Issues: read + write** on this repo

## Deploy

```bash
cd worker
npm install -g wrangler
wrangler login
wrangler secret put GITHUB_TOKEN
wrangler secret put GITHUB_REPO_OWNER   # Kasun1991
wrangler secret put GITHUB_REPO_NAME    # gym-partner-pro-backend
wrangler deploy
```

## After Deploying

1. Copy the worker URL from the deploy output (e.g. `https://gym-partner-backend.<account>.workers.dev`)
2. Replace `WORKER_URL_PLACEHOLDER` in `public/support.html` and `public/feature-request.html` with the actual URL
3. Commit and push — GitHub Pages redeploys in ~30 seconds

## Labels to Create

Go to **Issues → Labels** and create these before the worker goes live:

| Label | Color |
|-------|-------|
| `support` | Blue `#0075ca` |
| `feature-request` | Green `#008672` |
| `new` | Yellow `#e4e669` |
| `triaged` | Gray `#cfd3d7` |
