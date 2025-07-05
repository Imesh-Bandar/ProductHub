import express from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./config/dbconnection.js";
// Import the product model
import productRoutes from "./routes/product.routes.js";

const app = express();
const PORT = 5000 || process.env.PORT;

// Load environment variables from .env file
dotenv.config();
// Middleware : allow us to parse JSON data from the request body
app.use(express.json());

//call the product routes
app.use("/api/product", productRoutes);










































 




































//==================|| Connect to MongoDB and start the server ||==================//

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    // Connect to MongoDB
    connectMongoDB();
    console.log(`Server started successfully at http://localhost:${PORT}`);
});
