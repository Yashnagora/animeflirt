import mongoose from "mongoose";

const conncetDb = handler => async(req, res)=>{
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return handler(req, res);
}

export default conncetDb