import Anime from "../../models/Anime";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    try {
      const animeList = req.body;

      for (let i = 0; i < animeList.length; i++) {
        const { id, title, slug, image, trailer, episodes } = animeList[i];

        if (!id || !episodes) {
          return res.status(400).json({ error: "ID or episodes cannot be null" });
        }

        let existingAnime = await Anime.findOne({ id });

        if (existingAnime) {
          // If anime exists, merge or add episodes under each server type
          for (const [serverType, serverEpisodes] of Object.entries(episodes)) {
            if (existingAnime.episodes.has(serverType)) {
              // Merge episodes if serverType exists
              existingAnime.episodes.set(
                serverType,
                existingAnime.episodes.get(serverType).concat(serverEpisodes)
              );
            } else {
              // Add new serverType
              existingAnime.episodes.set(serverType, serverEpisodes);
            }
          }
          await existingAnime.save();
        } else {
          // Otherwise, create a new anime entry
          let newAnime = new Anime({
            id,
            title,
            slug,
            image,
            trailer,
            episodes,
          });
          await newAnime.save();
        }
      }
      res.status(200).json({ success: "success" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);
