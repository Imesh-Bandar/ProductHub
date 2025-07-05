import express from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./config/dbconnection.js";
// Import the product routes
import productRoutes from "./routes/product.routes.js";



// ==================|| Server Setup ||================== //
const app = express();
// Middleware : allow us to parse JSON data from the request body
app.use(express.json());
// Load environment variables from .env file
dotenv.config();

const PORT =  process.env.PORT || 3000; // Set the port from environment variable or default to 3000;




//==================|| Routes Setup ||================== //
app.use("/api/product", productRoutes);// Define the base route for product API




//==================|| Connect to MongoDB and start the server ||==================//
// Start the server and connect to MongoDB
app.listen(PORT, () => {
    // Connect to MongoDB
    connectMongoDB();
    console.log(`Server started successfully at http://localhost:${PORT}`);
});
