const mongoose = require("mongoose");

const EpisodeSchema = new mongoose.Schema({
  episodeNumber: { type: Number, required: true },
  EpisodeTitle: { type: String },
  iframeSrc: { type: String, required: true },
});

const AnimeSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String },
    trailer: { type: String },
    slug: { type: String, unique: true },
    image: { type: String },
    episodes: {
      type: Map,
      of: [EpisodeSchema],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Anime || mongoose.model("Anime", AnimeSchema);