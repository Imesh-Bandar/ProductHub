import Product from "../models/product.model.js";
import mongoose from "mongoose";






// Function to handle creating a new product
export const createProduct = async (req, res) => {
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
}

// Function to handle fetching a single product by ID
export const getProduct = async (req, res) => {
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
    } catch (error) {
        console.error("Error fetching product:", error.message);
        res.status(500).json({ status: false, message: "Internal server error while fetching product", });
    }
}

// Function to handle fetching all products
export const getProducts = async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Product.find({});
        // If no products found, return an empty array
        res.status(200).json({ status: true, products: products });
    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({ status: false, message: "Internal server error while fetching products", });
    }
}

// Function to handle editing a product
export const editProduct = async (req, res) => {
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

            res.status(200).json({ status: true, message: "Product updated successfully", productDetails: updateProduct });
        }

    } catch (error) {
        // If an error occurs during the update process, log the error and send a response
        console.error("Error updating product:", error.message);
        // Send a 500 status code with an error message
        res.status(500).json({ status: false, message: "Internal server error while updating product", });

    }


}


// Function to handle deleting a product
export const deleteProduct = async (req, res) => {
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
            res.status(200).json({ status: true, message: "Product deleted successfully" });
        } catch (error) {
            res.status(404).json({ status: true, message: "Product not found or could not be deleted", });
        }
    }
}
