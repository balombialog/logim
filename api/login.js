// api/login.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyoIZqORfVGSEzKYchDUyHUKmK6_hz2Oc27lKGl_jUsMZ8WgQE-q3_btq9hk8QHjCq4/exec",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(req.body)
        }
      );

      const data = await response.json();
      res.status(200).json(data);

    } catch (err) {
      res.status(500).json({ error: err.toString() });
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
