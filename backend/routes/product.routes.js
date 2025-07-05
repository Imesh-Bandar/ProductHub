import express, { application } from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";

const app = express();
const router = express.Router();
 // Middleware to parse JSON data from request body



 

//==================|| Product API Routes START -POST ||==================//
//Implement the product create route
router.post("/create", async (req, res) => {
    //get product from customer send using frontend request body
    const product = req.body;
    console.log("Received product data:", product);

    //check if product is valid or not
    if (!product.name || !product.price || !product.des || !product.imge) {

        // If product is not valid, return an error response
        return res.status(400).json({ status: false, message: "Please provide all required fields: name, price, description, and image URL.", });

    } else {
        // If product is valid, save it to the database
        try {
            //Import the product model and create a new product instance using frontend customer send data
            const newProduct = new Product({ name: product.name, price: product.price, des: product.des, imge: product.imge, });
            // Save the product to the mongodb database
            await newProduct.save();

            //send the response to the frontend
            res.status(201).json({ status: true, message: "Product created successfully", productDetails: newProduct, });

            //if the error occursing during the saving of product in database
        } catch (error) {
            console.error("Error creating product:", error.message);
            res.status(500).json({ status: false, message: "Internal server error while creating product", });
        }
    }
});
//==================|| Product API Routes END -POST ||==================//




//==================|| Product API Routes START -GET ||==================//
// This route will handle the fetching of all products
router.get('/', async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find({});
        // If no products found, return an empty array
        res.status(200).json({ status: true, products: products });
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({ status: false, message: "Internal server error while fetching products", });
    }
});
//==================|| Product API Routes END -GET ||==================//



//==================|| Product API Routes START -UPDATE ||==================//
router.put('/edit/:id', async (req, res) => {
    // Get the product ID from the URL parameters
    const { id } = req.params;
    console.log("Parameter ID:", id);

    // Get the updated product data from the request body
    const updatedProductData = req.body;
    try {
        //check if product id is valid id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ status: false, message: "Invalid product ID provided.", });
        } else {
            // if product is valid update the product in the database
            const updateProduct = await Product.findByIdAndUpdate(id, updatedProductData, { new: true });
            //send the response to the frontend

            res.status(200).json({status: true,message: "Product updated successfully", productDetails: updateProduct});
        }

    } catch (error) {
        // If an error occurs during the update process, log the error and send a response
        console.error("Error updating product:", error.message);
        // Send a 500 status code with an error message
        res.status(500).json({ status: false, message: "Internal server error while updating product",});

    }


})
//==================|| Product API Routes END -UPDATE ||==================//


//==================|| Product API Routes START - DELETE ||==================//
router.delete("/delete/:id", async (req, res) => {
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
            res.status(200).json({status: true, message: "Product deleted successfully" });
        } catch (error) {
            res.status(404).json({ status: true, message: "Product not found or could not be deleted", });
        }
    }
});

//==================|| Product API Routes END - DELETE ||==================//






export default router;