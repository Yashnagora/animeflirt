import Anime from "../../models/Anime";
import conncetDb from "../../middleware/mongoose";

const handler = async (req, res) => {
    let anime = await Anime.find()

    res.status(200).json({anime})
};

export default conncetDb(handler);
