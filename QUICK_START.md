# ⚡ QUICK START — Deploy in 5 Minutes

Your game is ready to go live! Follow these **3 quick steps**:

---

## 1. Push to GitHub

```bash
cd ~/Desktop/dice\ duel
git remote add origin https://github.com/YOUR-USERNAME/dice-duel.git
git branch -M main
git push -u origin main
```

(Create a repo at https://github.com/new first, then use the commands above)

---

## 2. Deploy Backend to Render

Go to: **https://render.com**

1. Sign up with GitHub
2. Click **"New Web Service"** → Connect your repo
3. Settings:
   - Root directory: `server`
   - Build: `npm install`
   - Start: `npm start`
4. Add environment variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-...` (from https://console.anthropic.com/account/keys)
5. Deploy
6. **Copy the URL** (e.g., `https://dice-duel-forge.onrender.com`)

---

## 3. Deploy Frontend to Netlify

**Before deploying**, update `www/index.html` line 709:

```javascript
const BACKEND_URL="https://dice-duel-forge.onrender.com";  // Your Render URL
```

Push this change:
```bash
git add www/index.html
git commit -m "Set backend URL"
git push
```

Then go to: **https://netlify.com**

1. Sign up with GitHub
2. **"Add new site"** → Import existing project
3. Select your repo
4. Publish directory: `www`
5. Deploy
6. **Done!** 🎉 Your game is live!

---

## What You Get

✅ **Coin & XP System** — Earn rewards for battles  
✅ **Upgrades** — Use coins to boost fighters  
✅ **Profile** — Track your level and progress  
✅ **Persistence** — Data saves in browser  
✅ **Scan Feature** — Generate fighters from camera  
✅ **Battle System** — Original dice rolling game  

---

## Your Live URL

Once Netlify deploys, you'll get a URL like:
```
https://dice-duel-12345.netlify.app
```

Share this with friends! 🎮

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Scan doesn't work | Check BACKEND_URL in index.html is correct |
| 502 error from Render | Make sure ANTHROPIC_API_KEY env var is set |
| Blank page on Netlify | Verify publish directory is set to `www` |

---

**See `LIVE_DEPLOYMENT_SUMMARY.md` for detailed guide**
