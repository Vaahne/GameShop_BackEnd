import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connectionStr = process.env.mongoURI;

async function connectDB(){
    try{
        await mongoose.connect(connectionStr);
        console.log("Connection to mongodb successful...");
    }catch(err){
        console.error(err.mesasge);
        process.exit(1); // shutdown the system 
    }
}

export default connectDB;