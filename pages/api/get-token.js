// pages/api/get-token.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { code } = req.body;
  
      try {
        const response = await fetch("https://anilist.co/api/v2/oauth/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            grant_type: "authorization_code",
            client_id: "20350",
            client_secret: "cMBgfgsz0czWNgwBDoCzEyNzBSpLpdCcnGBLIziN",
            redirect_uri: "http://localhost:3000/",
            code,
          }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error Response from AniList:", errorData);
          return res.status(response.status).json(errorData);
        }
  
        const data = await response.json();
        console.log("Response from AniList:", data);
        res.status(200).json(data);
      } catch (error) {
        console.error("Error fetching access token:", error);
        res.status(500).json({ error: "Error fetching access token" });
      }
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  