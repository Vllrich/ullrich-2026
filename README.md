# larsullrich.de

Personal website — Astro + WebGL ASCII fluid simulation.

## Stack

- [Astro](https://astro.build) (static output)
- WebGL2 fluid simulation with ASCII renderer
- EmailJS for contact form
- Docker + nginx for serving
- Deployed to Hetzner via GitHub Actions

## Local Development

```bash
cp .env.example .env   # fill in your EmailJS keys
npm install
npm run dev
```

## Maintenance Mode

Set `PUBLIC_MAINTENANCE_MODE=true` to show the maintenance page (fluid animation + contact form only) instead of the full site.

- **Locally:** add to `.env`
- **CI/CD:** set as a GitHub Actions repository variable (`Settings → Secrets and variables → Actions → Variables`)

## Deployment

Push to `master` triggers the GitHub Actions workflow which:

1. Builds the Docker image (Node 22, Astro static build with env vars baked in)
2. Transfers the image to the Hetzner server via SCP
3. Restarts the container via `docker compose`
4. Configures the host nginx vhost for `larsullrich.de → localhost:4000`

### Required GitHub Secrets

| Name | Description |
|------|-------------|
| `HETZNER_HOST` | Server IP address |
| `HETZNER_SSH_KEY` | Private SSH key with access to the server |
| `PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |

### Required GitHub Variables

| Name | Description |
|------|-------------|
| `PUBLIC_MAINTENANCE_MODE` | `true` to enable maintenance mode, `false` (or unset) for normal site |

### First Deploy — SSL

After the first successful deploy, SSH into the server and run:

```bash
certbot --nginx -d larsullrich.de -d www.larsullrich.de
```
