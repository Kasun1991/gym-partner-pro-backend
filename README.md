# Gym Partner Pro — Backend

Static backend for Gym Partner Pro Android app using GitHub Pages + Cloudflare Workers.

## Endpoints

| URL | Purpose |
|-----|---------|
| `https://kasungunathilaka.github.io/gym-partner-pro-backend/config.json` | App runtime config |
| `https://kasungunathilaka.github.io/gym-partner-pro-backend/terms.html` | Terms & Conditions |
| `https://kasungunathilaka.github.io/gym-partner-pro-backend/privacy.html` | Privacy Policy |
| `https://kasungunathilaka.github.io/gym-partner-pro-backend/support.html` | Support form |
| `https://kasungunathilaka.github.io/gym-partner-pro-backend/feature-request.html` | Feature request form |

Worker URL: `https://gym-partner-backend.<account>.workers.dev` *(fill in after deploy)*

## Architecture

```
GitHub Pages  ── config.json, terms.html, privacy.html
                  support.html, feature-request.html
                       │
                  form submit (fetch POST)
                       │
Cloudflare Worker ── validates fields, rejects honeypot
                       │
GitHub Issues API ── creates issue with labels
                       │
GitHub Issues tab ── your dashboard
```

## Dashboard Workflow

### Update config / Terms / Privacy
1. Edit the file in `public/` via GitHub web UI or locally + push.
2. GitHub Pages redeploys automatically in ~30 seconds.

### View submissions
1. Go to **Issues** tab in this repo.
2. Filter by label: `support` or `feature-request`.
3. Use `new` vs `triaged` to track triage status.

### Respond to a submission
1. Open the issue and comment with your reply.
2. Optionally email the user using the address in the issue body.
3. Apply `triaged` label, remove `new`.
4. Close the issue when resolved.

## Worker Setup

```bash
cd worker
npm install -g wrangler
wrangler login
wrangler secret put GITHUB_TOKEN      # fine-grained PAT with Issues: read+write
wrangler secret put GITHUB_REPO_OWNER # kasungunathilaka
wrangler secret put GITHUB_REPO_NAME  # gym-partner-pro-backend
wrangler deploy
```

After deploying, replace `WORKER_URL_PLACEHOLDER` in `public/support.html` and `public/feature-request.html` with the actual worker URL, then commit and push.

## Labels to Create

Go to **Issues → Labels** and create:

| Label | Color |
|-------|-------|
| `support` | Blue `#0075ca` |
| `feature-request` | Green `#008672` |
| `new` | Yellow `#e4e669` |
| `triaged` | Gray `#cfd3d7` |