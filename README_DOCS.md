# 🎲 DICE DUEL

A neon monster-fighting dice game with progression systems. Scan real-world objects with your camera to generate fighters, then battle opponents by rolling dice and selecting abilities.

## 🎮 Features

### Core Game
- **Scan-to-Capture:** Use your camera to scan any object and generate a fighter powered by Claude AI
- **Dice Rolling:** Swipe or hold to roll two 3D dice with physics
- **Turn-Based Combat:** Pick abilities based on roll results
- **Elements:** Fire › Electric › Water › Nature › Fire (1.5× damage cycle)
- **Doubles = Crits:** Rolling doubles triggers critical hits
- **Shields & Status:** Heal, shield, stun, weaken effects

### Progression (NEW! 🆕)
- **Coin Rewards:** Win battles to earn coins
  - Victory: +50💰 +100✨
  - Defeat: +15💰 +40✨
- **XP & Leveling:** Level up every 500 XP
- **Fighter Upgrades:** Spend coins to boost attack and HP
  - Each level: +5% ATK, +3% HP
  - Scaling cost (50 → 100 → 150 → ...)
- **Profile System:** Track level, coins, and XP
- **Data Persistence:** Everything saves to browser

## 📱 Tech Stack

**Frontend:** Vanilla JavaScript + CSS (single HTML file)  
**Backend:** Node.js + Express + Anthropic API  
**Hosting:** Netlify (frontend) + Render (backend)  
**Data:** Browser localStorage  

## 🚀 Quick Deploy

See [`QUICK_START.md`](QUICK_START.md) for 5-minute deployment guide.

**TL;DR:**
1. Push to GitHub
2. Deploy backend to Render with `ANTHROPIC_API_KEY`
3. Update `BACKEND_URL` in `www/index.html`
4. Deploy frontend to Netlify
5. Done! 🎉

---

## 📚 Documentation

- [`QUICK_START.md`](QUICK_START.md) — Deploy in 5 minutes
- [`LIVE_DEPLOYMENT_SUMMARY.md`](LIVE_DEPLOYMENT_SUMMARY.md) — Detailed deployment guide
- [`DEPLOYMENT.md`](DEPLOYMENT.md) — Full setup instructions
- [`DEPLOY_CHECKLIST.md`](DEPLOY_CHECKLIST.md) — Step-by-step checklist
- [`server/README.md`](server/README.md) — Backend documentation

---

## 🎯 Game Flow

1. **Start** → Pick a fighter from your roster or scan a new one
2. **Battle** → Roll dice, pick abilities, defeat opponent
3. **Rewards** → Earn coins and XP
4. **Progress** → Level up, upgrade fighters, unlock new abilities
5. **Repeat** → Battle stronger opponents

---

## 💾 Local Development

```bash
# Frontend (development)
cd www
python3 -m http.server 8000
# → Open http://localhost:8000

# Backend (development)
cd server
cp .env.example .env  # Add your ANTHROPIC_API_KEY
npm install
npm start
# → http://localhost:8788
```

Set `BACKEND_URL` in `www/index.html` to `http://localhost:8788` for local testing.

---

## 🔐 Security

- API key is **backend-only** (never exposed to frontend)
- All requests proxied through Render backend
- CORS configured for your domain
- localStorage used for client-side data only

---

## 📊 Project Structure

```
dice-duel/
├── www/
│   └── index.html          # Game (single file, no build)
├── server/
│   ├── index.js            # Backend proxy
│   ├── package.json
│   ├── .env.example        # API key template
│   └── README.md           # Backend docs
├── netlify.toml            # Frontend deployment config
├── .gitignore
├── QUICK_START.md          # 5-minute deploy guide
└── README.md               # This file
```

---

## 🎨 Customization

### Change Starting Coins
Edit `www/index.html` line ~484:
```javascript
let player={coins:100,level:1,xp:0,totalXP:0};
```

### Change XP Per Level
Edit `www/index.html` line ~490:
```javascript
const LEVEL_UP_XP=500;  // Change this
```

### Change Upgrade Costs
Edit `www/index.html` in `renderShop()` function:
```javascript
const costPerLevel=50;  // Change this
```

### Change AI Model
On Render dashboard, set env var:
```
MODEL=claude-sonnet-5  # Faster/cheaper
```

---

## 🐛 Troubleshooting

**Camera/scan not working?**
- Check browser console (F12)
- Verify `BACKEND_URL` is set correctly
- Ensure Render backend is running

**Data not persisting?**
- Check localStorage is enabled
- Not in private/incognito mode?

**Render shows 502?**
- Verify `ANTHROPIC_API_KEY` is set
- Restart the service

---

## 📜 License

Free to use and modify. Includes Anthropic API integration.

---

## 🎯 Next Steps

- [ ] Deploy to GitHub
- [ ] Deploy backend to Render
- [ ] Deploy frontend to Netlify
- [ ] Test scanner feature
- [ ] Share with friends!

See [`QUICK_START.md`](QUICK_START.md) to get started! 🚀

---

**Questions?** Check the detailed documentation files.
