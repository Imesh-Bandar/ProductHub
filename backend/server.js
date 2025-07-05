import express from "express";
import dotenv from "dotenv";
import { connectMongoDB } from "./config/dbconnection.js";
// Import the product model
import Product from "./models/product.model.js";

const app = express();
const PORT = 5000 || process.env.PORT;

// Load environment variables from .env file
dotenv.config();




// Middleware : allow us to parse JSON data from the request body
app.use(express.json());


//==================|| Product API Routes -POST ||==================//

// This route will handle the creation of new product
//Implement the product create route
app.post("/api/product", async (req, res) => {
    //get product from customer send using frontend request body
    const product = req.body;
    console.log("Received product data:", product);

    //check if product is valid or not
    if (!product.name || !product.price || !product.des || !product.imge) {
        return res.status(400).json({
            status: false,
            message:
                "Please provide all required fields: name, price, description, and image URL.",
        });
    } else {
        // If product is valid, save it to the database

        try {
            //Import the product model and create a new product instance using frontend customer send data
            const newProduct = new Product({
                name: product.name,
                price: product.price,
                des: product.des,
                imge: product.imge,
            });
            // Save the product to the mongodb database
            await newProduct.save();

            //send the response to the frontend
            res.status(201).json({
                status: true,
                message: "Product created successfully",
                productDetails: newProduct,
            });

            //if the error occursing during the saving of product in database
        } catch (error) {
            console.error("Error creating product:", error.message);
            res.status(500).json({
                status: false,
                message: "Internal server error while creating product",
            });
        }
    }
});





//==================|| Product API Routes - DELETE ||==================//
app.delete("/api/product/:id", async (req, res) => {
    //get the product id from url parameters
    const { id } = req.params;
    console.log("Parameter ID:", id);

    //check product id is valid
    if (!id) {
        return res.status(400).json({
            status: false,
            message: "Product ID is required to delete a product.",
        });
    } else {
        try {
            await Product.findByIdAndDelete(id);
            //send the response to the frontend
            res.status(200).json({
                status: true,
                message: "Product deleted successfully",
            });
        } catch (error) {
            res.status(404).json({
                status: true,
                message: "Product not found or could not be deleted",
            });
        }
    }
});


//==================|| Connect to MongoDB and start the server ||==================//

// Start the server and connect to MongoDB
app.listen(PORT, () => {
    // Connect to MongoDB
    connectMongoDB();
    console.log(`Server started successfully at http://localhost:${PORT}`);
});
