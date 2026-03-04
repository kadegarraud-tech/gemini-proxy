// api/gemini.js
export default async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key not set" });
  }

  const response = await fetch('https://api.gemini.com/v1/some-endpoint', {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });

  const data = await response.json();
  res.status(200).json(data);
}