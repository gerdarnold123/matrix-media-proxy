# Matrix Media Proxy - Fly.io

[![Deploy to Fly.io](https://fly.io/images/deploy-to-flyio.svg)](https://fly.io/app/new?repo=https://github.com/<DEIN_GITHUB_USERNAME>/matrix-media-proxy)

## Was ist das?

Ein kleiner Node.js-Proxy-Server, mit dem dein Matrix-Client Medien über deinen eigenen Fly.io-Server lädt.  
Damit vermeidest du CORS-Probleme & kannst authentifiziert Mediendaten ziehen.

## Deployment

### Voraussetzungen

- Fly CLI installiert (flyctl)  
- Ein Fly.io-Account  
- GitHub-Repo (dort, wo dieses Projekt liegt)  

### Deploy

```bash
fly auth login
fly deploy
