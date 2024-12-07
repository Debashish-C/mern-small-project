import mongoose from "mongoose"
export const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb connected : ${con.connection.host}`);
    } catch (error) {
        console.log("Error is :",error);
        process.exit(1);  //1 code means a failure
    }
}