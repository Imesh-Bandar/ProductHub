import mongoose from "mongoose";


// Function to connect to MongoDB
export const connectMongoDB = async () => {
    try {
        //Load environment variables from .env file
        const MONGO_URL = process.env.MONGO_URL;
        //create a connection with MongoDB
        const conn = await mongoose.connect(MONGO_URL);
        //check if the connection is successfull
        if (conn) {
            console.log("MongoDB connected successfully");
            console.log("hostname",conn.connection.host);
        }

    } catch (error) {
        console.log("Cannot Connected to the mongodb database", error.message);
        process.exit(1); //1 means failure,0 means success
    }

}