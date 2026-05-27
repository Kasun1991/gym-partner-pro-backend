# Gym Partner Pro — Backend

Static backend for Gym Partner Pro Android app using GitHub Pages + Cloudflare Workers.

## Endpoints

| URL | Purpose |
|-----|---------|
| `https://kasun1991.github.io/gym-partner-pro-backend/terms.html` | Terms & Conditions |
| `https://kasun1991.github.io/gym-partner-pro-backend/privacy.html` | Privacy Policy |
| `https://kasun1991.github.io/gym-partner-pro-backend/support.html` | Support form |
| `https://kasun1991.github.io/gym-partner-pro-backend/feature-request.html` | Feature request form |

> **Runtime config and feature flags** are managed via Firebase Remote Config — not this repo.

## Architecture

```
GitHub Pages  ── terms.html, privacy.html
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

## Docs

See the [Wiki](../../wiki) for setup and operational guides:

- [Worker Setup](../../wiki/Worker-Setup)
- [Dashboard Workflow](../../wiki/Dashboard-Workflow)
