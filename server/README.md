# Dice Duel — Forge Server

Small proxy that turns a scanned photo (or typed label) into a fighter via the
Anthropic API, keeping your API key off the phone. The app calls this instead of
Anthropic directly.

**Route:** `POST /api/forge` with JSON body `{ "image": "<base64 jpeg>" }` or `{ "label": "capybara" }` → returns the fighter JSON. `GET /health` for a liveness check.

## Run locally

```bash
cd server
npm install
cp .env.example .env      # then paste your real ANTHROPIC_API_KEY into .env
node --env-file=.env index.js
# → http://localhost:8788/health
```

## Deploy (pick one host)

The app needs this reachable over the internet. Any Node host works. Easiest:

### Render (free tier)
1. Push this repo to GitHub.
2. Render → New → **Web Service** → pick the repo.
3. Root directory: `server` · Build: `npm install` · Start: `npm start`.
4. Add environment variable `ANTHROPIC_API_KEY` = your key.
5. Deploy → copy the URL, e.g. `https://dice-duel-forge.onrender.com`.

### Railway / Fly.io
Same idea: set the start command to `npm start` and add `ANTHROPIC_API_KEY`.

## Point the app at it

In `www/index.html`, set:

```js
const BACKEND_URL = "https://your-deployed-url";
```

Then `npx cap sync ios` and rebuild in Xcode.

## Environment variables

| Var | Required | Default | Notes |
|---|---|---|---|
| `ANTHROPIC_API_KEY` | ✅ | — | Your Anthropic key. |
| `MODEL` | — | `claude-opus-4-8` | Set `claude-sonnet-5` for faster/cheaper forging. |
| `PORT` | — | `8788` | Most hosts set this automatically. |
| `CORS_ORIGIN` | — | `*` | Lock down if you want. |
