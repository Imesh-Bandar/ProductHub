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




app.get('/api/product/:id', async (req, res) => {
    const { id } = req.params;
    console.log("Parameter ID:", id);

    try {
        const product = await Product.findById(id);
        // Check if product exists
        if (!product) {
            return res.status(404).json({ status: false, message: "Product not found." });

        } else {
            // If product exists, send it in the response
            res.status(200).json({ status: true, productDetails: product });
        }
    }catch (error) {
        console.error("Error fetching product:", error.message);
        res.status(500).json({ status: false, message: "Internal server error while fetching product", });
    }

})

 






































 




































//==================|| Connect to MongoDB and start the server ||==================//

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    // Connect to MongoDB
    connectMongoDB();
    console.log(`Server started successfully at http://localhost:${PORT}`);
});
