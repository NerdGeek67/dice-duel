import express from "express";
import cors from "cors";
import Anthropic from "@anthropic-ai/sdk";

/* ---------------------------------------------------------------
   Dice Duel — fighter forge proxy
   Holds the Anthropic API key server-side so the shipped app never
   ships a key. One route: POST /api/forge  { image } | { label }
--------------------------------------------------------------- */

const app = express();
app.use(express.json({ limit: "8mb" })); // base64 photos are large

// CORS — set CORS_ORIGIN to your app origin in production ("*" is fine for a
// Capacitor app since it has no fixed web origin, but you can lock it down).
app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));

// Reads ANTHROPIC_API_KEY from the environment. Never hardcode the key.
const client = new Anthropic();
// Opus 4.8 by default; set MODEL=claude-sonnet-5 for faster/cheaper forging.
const MODEL = process.env.MODEL || "claude-opus-4-8";

const SYSTEM_PROMPT = `You are the creature-forge for a neon dice-battle game. Given a real-world object, invent a battle fighter based on it.
Return ONLY a JSON object, no markdown, no prose, with this exact shape:
{
 "name": "UPPERCASE short battle name (<=16 chars)",
 "emoji": "single emoji that best represents the object",
 "element": one of "fire","water","elec","nature",
 "maxhp": integer 80-130,
 "atk": number 0.9-1.5 (one decimal),
 "skills": [
   {"name":"UPPERCASE skill name","ico":"emoji","type":"dmg","mult":1.0-1.3,"min":0,"desc":"short flavor"},
   {"name":"UPPERCASE skill name","ico":"emoji","type":"dmg","mult":1.8-2.2,"min":7,"crit":true,"desc":"short flavor, big hit"},
   {"name":"UPPERCASE skill name","ico":"emoji","type":"shield","mult":1.3-1.6,"min":0,"desc":"short flavor defense"}
 ]
}
Make skills CREATIVE and specific to the object. A Porsche 911 GT3 RS might have TIRE SCREECH, DOWNFORCE SLAM, CHASSIS GUARD. A capybara might have ZEN STOMP, CHAOS NIBBLE, MUD BARRIER. Choose element by theme: vehicles/engines->fire or elec, drinks/hot things->fire, water/ice->water, animals/plants->nature, electronics->elec. Keep descriptions under 8 words.`;

app.get("/health", (_req, res) => res.json({ ok: true, model: MODEL }));

// Privacy policy — Apple requires a reachable URL because the app uses the camera.
// Once deployed, use https://<your-host>/privacy as the App Store "Privacy Policy URL".
app.get("/privacy", (_req, res) => {
  res.type("html").send(`<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Dice Duel — Privacy Policy</title>
<style>body{font:16px/1.7 -apple-system,system-ui,sans-serif;max-width:680px;margin:40px auto;padding:0 20px;color:#111}h1{font-size:26px}h2{font-size:19px;margin-top:28px}small{color:#666}</style>
</head><body>
<h1>Dice Duel — Privacy Policy</h1>
<small>Last updated: 2026</small>
<p>Dice Duel is a game. We keep data collection to the minimum needed to run it.</p>
<h2>Camera &amp; photos</h2>
<p>If you use the "scan a fighter" feature, the photo you take is sent once to our
server and on to our AI provider (Anthropic) solely to generate a game character
from it. The image is processed in real time and is <strong>not stored</strong> by us,
and is not used to identify you, for advertising, or for tracking. Using the camera
is optional — you can type an object name instead.</p>
<h2>What we do not collect</h2>
<p>No account or login. No name, email, or contact info. No location. No analytics or
advertising SDKs. No third-party tracking. Your captured fighters are stored only on
your own device.</p>
<h2>Children</h2>
<p>Dice Duel does not knowingly collect personal information from children.</p>
<h2>Contact</h2>
<p>Questions about this policy: <strong>[your support email]</strong>.</p>
</body></html>`);
});

app.post("/api/forge", async (req, res) => {
  try {
    const { image, label } = req.body || {};
    let content;
    if (image) {
      content = [
        { type: "image", source: { type: "base64", media_type: "image/jpeg", data: image } },
        { type: "text", text: "Identify the main object in this photo and forge a fighter from it. JSON only." },
      ];
    } else if (label && String(label).trim()) {
      content = [{ type: "text", text: `The player scanned: "${String(label).trim()}". Forge a fighter from it. JSON only.` }];
    } else {
      return res.status(400).json({ error: "Provide 'image' (base64 jpeg) or 'label' (text)." });
    }

    const msg = await client.messages.create({
      model: MODEL,
      max_tokens: 1000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content }],
    });

    const text = (msg.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("");
    const clean = text.replace(/```json|```/g, "").trim();
    const spec = JSON.parse(clean); // client re-validates via normalizeSpec()
    res.json(spec);
  } catch (err) {
    console.error("forge error:", err?.message || err);
    res.status(502).json({ error: "Forge failed." });
  }
});

const PORT = process.env.PORT || 8788;
app.listen(PORT, () => console.log(`Dice Duel forge server listening on :${PORT} (model ${MODEL})`));
