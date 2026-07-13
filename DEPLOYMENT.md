# 🚀 Dice Duel — Deployment Guide

This guide will get your game live on the internet in ~10 minutes.

## Quick Start

You need to deploy **two things**:
1. **Backend** (forge server) → Render
2. **Frontend** (game) → Netlify

---

## Step 1: Deploy Backend to Render

### 1.1 Create a Render Account
- Go to https://render.com
- Sign up with GitHub or email

### 1.2 Create a Web Service
- Click **"New +"** → **"Web Service"**
- Connect your GitHub repo (or upload manually)
- Fill in these settings:
  - **Name:** `dice-duel-forge` (or any name)
  - **Root Directory:** `server`
  - **Environment:** `Node`
  - **Build Command:** `npm install`
  - **Start Command:** `npm start`
  
### 1.3 Add Environment Variables
- In the Render dashboard, go to **Environment** tab
- Add this variable:
  ```
  ANTHROPIC_API_KEY = sk-ant-your-actual-key-here
  ```
  (Get your key from https://console.anthropic.com/account/keys)

### 1.4 Deploy
- Click **"Create Web Service"**
- Wait ~2 minutes for deployment
- Copy your Render URL (looks like `https://dice-duel-forge.onrender.com`)

---

## Step 2: Update Frontend with Backend URL

Edit `www/index.html`, find this line (~709):
```javascript
const BACKEND_URL="";
```

Replace with your Render URL:
```javascript
const BACKEND_URL="https://dice-duel-forge.onrender.com";
```

**Commit this change:**
```bash
git add www/index.html
git commit -m "Update backend URL for production"
git push
```

---

## Step 3: Deploy Frontend to Netlify

### 3.1 Create a Netlify Account
- Go to https://netlify.com
- Sign up with GitHub

### 3.2 Deploy with Git
- Click **"Add new site"** → **"Import an existing project"**
- Select your GitHub repo
- Fill in:
  - **Base directory:** (leave empty)
  - **Build command:** (leave empty — it's a static site)
  - **Publish directory:** `www`

### 3.3 Deploy
- Click **"Deploy site"**
- Wait ~1 minute
- Your game is now live! 🎮

Netlify will give you a URL like:
```
https://your-app-name.netlify.app
```

---

## Step 4: Verify It Works

1. Open your Netlify URL in a browser
2. Click **"👤 PROFILE"** to see if data persists
3. Try upgrading a fighter in the shop
4. **Scan a fighter** — if camera works, you're good!
   - If scan fails with "no backend", your Render URL isn't set correctly in the code

---

## Troubleshooting

### Camera/Scan Not Working?
- Check the browser console (F12 → Console tab)
- Verify `BACKEND_URL` is set correctly in `www/index.html`
- Make sure Render backend is running (check https://dashboard.render.com)

### 502 Bad Gateway from Render?
- Check that you added `ANTHROPIC_API_KEY` as an environment variable
- Restart the service in Render dashboard

### Data Not Persisting?
- Check browser localStorage (F12 → Application → Local Storage)
- Make sure you're not in private/incognito mode

---

## Update Workflow (Going Forward)

When you make changes:

1. **If frontend changes** → just push to GitHub, Netlify auto-deploys
2. **If backend changes** → push and Render auto-deploys
3. **If you change the Anthropic model** → update `.env` on Render dashboard

---

## Optional: Custom Domain

Want `dice-duel.com` instead of `your-app.netlify.app`?

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Netlify: **Site Settings** → **Domain** → **Add domain**
3. Follow Netlify's DNS instructions
4. Done! 🎉

---

## API Key Security

- ✅ Your `ANTHROPIC_API_KEY` is **only** on Render (backend)
- ✅ The frontend **never sees** your key
- ✅ All API calls are proxied through the backend
- ✅ Never commit `.env` to GitHub (already in `.gitignore`)

---

## Live URLs

Once deployed, share these:
- **Game:** https://your-app.netlify.app
- **Health Check:** https://your-backend.onrender.com/health (should return `{"ok":true}`)

---

**Questions?** Check the server README at `server/README.md`
