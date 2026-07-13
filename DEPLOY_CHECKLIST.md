# ✅ Dice Duel Deployment Checklist

## Before You Start
- [ ] You have an Anthropic API key (from https://console.anthropic.com/account/keys)
- [ ] You have a GitHub account
- [ ] Your code is pushed to GitHub

## Backend Deployment (Render)
- [ ] Create Render account at https://render.com
- [ ] Connect GitHub repo
- [ ] Create Web Service with `server` directory
- [ ] Add `ANTHROPIC_API_KEY` environment variable
- [ ] Deploy and wait 2 minutes
- [ ] Copy your Render URL (e.g., `https://dice-duel-forge.onrender.com`)
- [ ] Test: Visit `https://your-url.onrender.com/health` (should show `{"ok":true}`)

## Frontend Deployment (Netlify)
- [ ] **First:** Update `www/index.html` line 709 with your Render URL:
  ```javascript
  const BACKEND_URL="https://your-render-url.onrender.com";
  ```
- [ ] Commit and push to GitHub
- [ ] Create Netlify account at https://netlify.com
- [ ] Connect GitHub repo
- [ ] Set publish directory to `www`
- [ ] Deploy and wait 1 minute
- [ ] Your game is LIVE! 🎮

## Test on Live Site
- [ ] Open your Netlify URL in browser
- [ ] Profile page loads (click 👤 PROFILE)
- [ ] Shop works (click 🏪 SHOP)
- [ ] Upgrades persist
- [ ] Try scanning a fighter (if camera works, backend is connected!)

## Success! 🎉
Your game is now live! Share these links:
- **Game URL:** `https://your-netlify-url.netlify.app`
- **Backend Health:** `https://your-render-url.onrender.com/health`

---

## Common Issues

| Problem | Solution |
|---------|----------|
| Scan/camera doesn't work | Check BACKEND_URL in `www/index.html` is correct |
| Render shows 502 error | Make sure ANTHROPIC_API_KEY env var is set |
| Netlify shows blank page | Check publish directory is set to `www` |
| Data not saving | Check browser's localStorage is enabled |

---

**Need help?** See `DEPLOYMENT.md` for detailed instructions.
