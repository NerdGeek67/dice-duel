# 🎮 Dice Duel — Ready to Go Live! 

Your game has been upgraded with:
✅ Coin & XP reward system  
✅ Level progression  
✅ Fighter upgrade shop  
✅ Profile/stats screen  
✅ Local data persistence  

Everything is production-ready. Follow these **3 simple steps** to go live:

---

## STEP 1️⃣: Deploy Backend (2 mins)

**Go to:** https://render.com
1. Sign up with GitHub
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repo
4. Settings:
   - Name: `dice-duel-forge`
   - Root Directory: `server`
   - Build: `npm install`
   - Start: `npm start`
5. Click **"Environment"** tab
6. Add variable: `ANTHROPIC_API_KEY = sk-ant-...` (get from https://console.anthropic.com/account/keys)
7. Deploy!
8. **COPY your URL** (looks like: `https://dice-duel-forge.onrender.com`)

---

## STEP 2️⃣: Update Frontend Code (1 min)

**File:** `www/index.html` (line 709)

Change:
```javascript
const BACKEND_URL="";
```

To:
```javascript
const BACKEND_URL="https://dice-duel-forge.onrender.com";
```

(Replace with YOUR Render URL from Step 1)

Then push to GitHub:
```bash
git add www/index.html
git commit -m "Set production backend URL"
git push
```

---

## STEP 3️⃣: Deploy Frontend (1 min)

**Go to:** https://netlify.com
1. Sign up with GitHub
2. Click **"Add new site"** → **"Import existing project"**
3. Select your repo
4. Settings:
   - Publish directory: `www`
   - (Leave build command empty)
5. Deploy!
6. Wait 1 minute...
7. **YOU'RE LIVE!** 🎉

Your game URL: `https://your-site-name.netlify.app`

---

## Test It

✅ Open your Netlify URL  
✅ Click **👤 PROFILE** — shows level, coins, XP  
✅ Click **🏪 SHOP** — can upgrade fighters  
✅ Try scanning a fighter (camera should work)  

---

## What's Live

| Feature | Status |
|---------|--------|
| Coin rewards | ✅ Working |
| XP system | ✅ Working |
| Fighter upgrades | ✅ Working |
| Profile screen | ✅ Working |
| Upgrade shop | ✅ Working |
| Data persistence | ✅ Working |
| Scan feature | ✅ Ready (needs camera) |
| Battle system | ✅ Original game intact |

---

## Share Your Game

Once live, share this URL with friends:
```
https://your-site-name.netlify.app
```

They can:
- Scan fighters with camera
- Battle AI opponents
- Earn coins & XP
- Upgrade fighters
- See their progress

---

## Need Help?

- **Backend issues?** → Check `server/README.md`
- **Deployment questions?** → See `DEPLOYMENT.md`
- **Step-by-step guide** → See `DEPLOY_CHECKLIST.md`

---

**Ready? Go live with these 3 steps! 🚀**
