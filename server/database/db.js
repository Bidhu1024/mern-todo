import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const mongo = process.env.mongo;
 const Connection=()=>{

    const MONGODB_URI = mongo;
    mongoose.connect(MONGODB_URI)
    mongoose.connection.on("connected",()=>{
        console.log("MongoDB connected");
    })
    mongoose.connection.on("disconnected",()=>{
        console.log("MongoDB disconnected");
    })
    mongoose.connection.on('error', () =>{
console.log("Error");
    })
}

export default Connection;