const fetch = require('node-fetch');

module.exports = async function handler(req, res) {
  const API_KEY = process.env.AIzaSyCg5LN6_lm-HpyQIz3_biZGDCsuZzAFQsE;

  if (!API_KEY) {
    return res.status(500).json({ error: "API key not set" });
  }

  // test response to make sure the endpoint works
  res.status(200).json({ message: "Hello from Gemini proxy!" });
};