import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongoDB connected")
    }catch(err){
        console.log(err.message)
        process.exit(1)
    }
}
