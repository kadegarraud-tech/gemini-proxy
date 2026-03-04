export default async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key not set" });
  }

  if (!req.body) {
    return res.status(400).json({ error: "Request body required" });
  }

  try {
    const response = await fetch('https://api.gemini.com/v1/some-endpoint', {
      method: req.method,
      headers: { 
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
    });

    if (!response.ok) {
      return res.status(response.status).json({ 
        error: `Gemini API error: ${response.statusText}` 
      });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}