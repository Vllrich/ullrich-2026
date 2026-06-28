# larsullrich.de

Personal website built with Astro. Bauhaus-grid WebGL canvas hero, self-hosted fonts, GoatCounter analytics.

## Stack

- [Astro](https://astro.build) 6.x (static output, compressHTML, prefetch)
- WebGL2 Bauhaus grid canvas (Cover.astro)
- [@fontsource-variable](https://fontsource.org) — Darker Grotesque + Hanken Grotesk (self-hosted, no Google Fonts)
- [EmailJS](https://emailjs.com) for contact form (honeypot bot protection)
- [GoatCounter](https://www.goatcounter.com) for privacy-friendly analytics
- Docker + nginx for serving (security headers, gzip, CSP)
- Deployed to Hetzner via GitHub Actions (type-check gate, health check, rollback image)

## Local Development

```bash
cp .env.example .env   # fill in your EmailJS keys
npm install
npm run dev
```

Type-check:

```bash
npm run check
```

## Maintenance Mode

Set `PUBLIC_MAINTENANCE_MODE=true` to show the maintenance page instead of the full site.

- **Locally:** set in `.env`
- **CI/CD:** set as a GitHub Actions repository variable (`Settings → Secrets and variables → Actions → Variables`)

## Deployment

Push to `master` triggers the GitHub Actions workflow:

1. **Type-check** (`astro check`) — gates the deploy
2. Builds the Docker image (Node 22, Astro static build, env vars baked in)
3. Transfers the image to the Hetzner server via SCP
4. Tags the running image as `:previous` for rollback
5. Starts the new container via `docker compose up -d --remove-orphans`
6. Runs a health check against `https://larsullrich.de/`

### Required GitHub Secrets

| Name                         | Description                               |
| ---------------------------- | ----------------------------------------- |
| `HETZNER_HOST`               | Server IP address                         |
| `HETZNER_SSH_KEY`            | Private SSH key (deploy user)             |
| `PUBLIC_EMAILJS_PUBLIC_KEY`  | EmailJS public key                        |
| `PUBLIC_EMAILJS_SERVICE_ID`  | EmailJS service ID                        |
| `PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID                       |

### Required GitHub Variables

| Name                      | Description                                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| `PUBLIC_MAINTENANCE_MODE` | `true` to enable maintenance mode, `false` (or unset) for normal site  |

## Server Setup Notes

- TLS: Let's Encrypt cert mounted into the `larsullrich-nginx` Docker container from `/opt/larsullrich/ssl/`
- Cert renewal: managed on the host (Certbot, ~90-day rotation)
- SSH access: `deploy` user (member of `docker` group), not root
- Rollback: `docker tag ullrich-2026:previous ullrich-2026:latest && docker compose up -d`
- Inspect live nginx config: `docker exec larsullrich-nginx cat /etc/nginx/conf.d/default.conf`
