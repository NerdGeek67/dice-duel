# Dice Duel — App Store submission pack

Everything below is ready to paste into App Store Connect. Fields are in the order
you'll hit them. Character limits noted where Apple enforces them.

---

## App information

- **Name** (30): `Dice Duel`
- **Subtitle** (30): `Scan. Roll. Battle.`
- **Bundle ID:** `com.nerdgeek.diceduel`  (already set in Xcode)
- **Primary category:** Games → **Board**
- **Secondary category:** Games → **Strategy**
- **Content rights:** You own or have rights to all content (dice/monster art is emoji + generated). Check the box.

## Pricing

- **Price:** Free (Tier 0)

## Age rating

Answer the questionnaire. Expected result **9+** because monster battles = "Infrequent/Mild
Cartoon or Fantasy Violence." Everything else: None. (If you'd rather target 4+, note the
battles are abstract dice + emoji — but 9+ is the safe honest answer.)

## URLs

- **Privacy Policy URL** (required): `https://<your-backend-host>/privacy`  ← served by your backend automatically once deployed
- **Support URL** (required): a page users can reach you at. Simplest options:
  - a GitHub repo README, or
  - `https://<your-backend-host>/privacy` again as a stopgap, or
  - a free page (Notion/Carrd) with your contact email.

---

## Promotional text (170) — editable any time without review

`Turn anything into a fighter — scan a real object and battle with dice. Time your roll for perfect power, charge devastating ultimates, and crit your way to victory.`

## Description (4000)

```
Scan reality. Roll the dice. Win the duel.

Dice Duel turns the real world into your battle roster. Point your camera at anything — a coffee mug, your dog, a sports car — and it becomes a one-of-a-kind fighter with its own element, stats, and three custom skills. No two fighters are ever the same.

Then battle. Every turn you roll two dice, but this isn't luck alone: HOLD to charge a power gauge and release at the perfect moment for high rolls and doubles. Time it right and you crit. Spend your roll on a skill — or bank it into your ULTIMATE and unleash a game-changer: colossal one-hit nukes, 3-turn burns, massive shields, or dice-boosting overdrives.

FEATURES
• Scan-to-fight: turn any real object into a playable fighter
• Skill-based dice: swipe or hold-to-charge, with a perfect-timing sweet spot
• Ultimates: stack your rolls, then unleash four kinds of devastating finishers
• Elements: fire › electric › water › nature — hit weaknesses for bonus damage
• Doubles = crits, with full-screen celebrations
• 7 built-in fighters plus everything you scan
• Juicy dice physics, haptics, and neon visuals

No account. No ads. No tracking. Just scan, roll, and duel.
```

## Keywords (100, comma-separated, no spaces after commas)

`dice,duel,battle,roll,rpg,monster,scan,turn based,card,strategy,fighter,crit,arena,pvp,neon`

## What's New (for v1)

`First release. Scan real objects into fighters, roll with skill-based timing, and unleash ultimates. Good luck out there.`

---

## App Privacy (the questionnaire on the App Privacy page)

- **Do you collect data?** Yes (because a photo is transmitted).
- **Data type:** User Content → **Photos or Videos**.
  - **Used for:** App Functionality.
  - **Linked to the user's identity?** No.
  - **Used for tracking?** No.
- Everything else (contact info, identifiers, location, usage data, diagnostics): **Not collected.**

> Rationale you can reuse: the photo is sent once to generate a fighter and is not
> stored, not linked to identity, and not used for tracking. This matches the privacy
> policy served at /privacy.

## Review notes (paste into "Notes" for the reviewer)

```
Dice Duel is a single-player dice battle game. No login or account is required.

The camera is used only for the optional "scan a fighter" feature: the player photographs
any object and the app generates a game character from it. Camera use is optional — a
"Type instead" button provides the same feature without the camera. The photo is sent to
our backend, processed by an AI model to return character stats, and is not stored.

To test scanning: tap SCAN NEW FIGHTER and allow camera, or use "Type instead" and enter
any object name (e.g. "capybara"). All other gameplay works offline with the built-in fighters.
```

- **Sign-in required?** No — leave demo account fields blank.

---

## Screenshots (required)

Apple requires **6.7" iPhone** screenshots (1290 × 2796 px), 3–10 of them. Suggested set:
1. Roster / fighter select
2. A battle mid-roll (dice in the air)
3. A double/crit celebration
4. Abilities + ultimate charging
5. The scan screen

Easiest capture: run the app in the **iPhone 16 Pro Max** simulator (that's exactly
1290 × 2796) and use Simulator → File → Save Screen, or `xcrun simctl io booted screenshot`.

---

## Copyright

`2026 <your name or company>`
