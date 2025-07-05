import express from "express";
// Import the product controller functions
import { createProduct, deleteProduct, editProduct, getProduct, getProducts } from "../controller/product.controller.js";


// base route for product API
//app.use("/api/product", router);
const router = express.Router();
// Define the routes for product operations

router.get('/', getProducts);// Get all products
router.get('/:id', getProduct)// Get a single product by ID
router.post("/create", createProduct);// Create a new product
router.put('/edit/:id', editProduct)// Edit a product by ID
router.delete("/delete/:id", deleteProduct);// Delete a product by ID

 






export default router;