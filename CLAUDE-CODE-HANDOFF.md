# DICE DUEL — Claude Code Handoff

Paste this whole file into Claude Code as your first message, along with the
game file `dice-duel-scan.html`. It tells Claude Code what exists and what to build.

---

## 1. What this is

A neon monster-fighting dice game. Single self-contained HTML file
(`dice-duel-scan.html`, ~660 lines, no build step, no dependencies).

### Core mechanics (already built, keep them)
- **Scan-to-capture:** phone camera photo → Claude vision API → generates a
  fighter (name, emoji, element, HP, attack, 3 themed skills) from any real
  object. Scan a Porsche → car fighter with car skills. Scan a capybara →
  capybara fighter. Falls back to a text prompt if no camera.
- **Swipe up** on the dice tray to roll two 3D CSS dice (power scales with swipe).
- **Skill selection:** after rolling, pick 1 of 3 skills to spend the roll on.
  Some skills need a minimum roll to unlock.
- **Elements:** fire › elec › water › nature › fire (1.5× super-effective).
- **Doubles = crit.** Turn-based vs AI opponent. Shields, heal, stun, weaken.
- **Roster:** scanned fighters saved in memory for the session. 3 starters included.
- Juice: particle bursts, screen shake, floating damage, HP bars.

### Known limitation to fix
The scan calls `https://api.anthropic.com/v1/messages` **directly from the
browser**. That works in the Claude.ai preview but NOT in a shipped app —
an app can't safely hold an API key. Needs a backend proxy.

---

## 2. Goal

Turn this into an **iOS app using Capacitor** (fastest path — keeps all the
web code, also gives Android free later). Then make the scan feature work
safely through a small backend.

---

## 3. Tasks for Claude Code (in order)

### Task A — Capacitor project
- Scaffold a Capacitor app with web dir `www/`.
- Put the game at `www/index.html`.
- App name "Dice Duel", id `com.nerdgeek.diceduel`.
- Add the iOS platform. Commands:
  ```bash
  npm init -y
  npm install @capacitor/core @capacitor/cli
  npx cap init "Dice Duel" "com.nerdgeek.diceduel" --web-dir=www
  npm install @capacitor/ios && npx cap add ios
  npx cap sync
  ```

### Task B — Backend proxy for scan (holds the API key)
- Small Node/Express server with one route, e.g. `POST /api/forge`.
- It receives `{ image }` (base64) or `{ label }` (text), calls the Anthropic
  API server-side using `ANTHROPIC_API_KEY` from an env var, returns the fighter JSON.
- Never expose the key to the client. Add CORS for the app origin.
- Keep the exact same system prompt + JSON shape the game already expects
  (see the `SYSTEM_PROMPT` and `normalizeSpec()` in the HTML).

### Task C — Point the game at the backend
- In the game, replace the direct `fetch("https://api.anthropic.com/...")`
  in `callClaude()` with a call to the backend route (a `BACKEND_URL` const).
- Keep the text-prompt fallback for when the request fails.

### Task D — Native polish (optional, nice)
- `@capacitor/camera` for a smoother native capture than `getUserMedia`.
- `@capacitor/haptics` — buzz on dice land, crit, and hit.
- Persist the roster with `@capacitor/preferences` so captures survive restarts.
- Fullscreen / status bar styling to match the dark neon theme.

### Task E — Run + ship
- `npx cap open ios`, run on a real iPhone.
- Then archive → App Store (needs Apple Developer account, $99/yr).

---

## 4. What you need on your machine
- A Mac with **Xcode**
- **Node.js**
- **Apple Developer account** ($99/yr) to submit (free to test on your own phone)
- Somewhere to host the backend (Task B) — a small server or serverless function

---

## 5. Guardrails
- Do NOT rewrite the game from scratch. Keep the existing HTML/JS as the app body.
- Keep the game a single file if possible; only split if Capacitor needs it.
- Preserve the fighter JSON contract between backend and game exactly.
- Test the no-camera and API-failure fallbacks still work.

---

## Suggested first message to Claude Code
> "Here's my game (dice-duel-scan.html) and a handoff doc. Start with Task A:
> scaffold the Capacitor iOS project and get the game running on my phone.
> Then we'll do the backend for the scan feature."
