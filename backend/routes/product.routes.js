import express, { application } from "express";

import { createProduct, deleteProduct, editProduct, getProduct, getProducts } from "../controller/product.controller.js";

const app = express();
const router = express.Router();
// Middleware to parse JSON data from request body

// base route for product API
//app.use("/api/product", router);



//==================|| Product API Routes START -POST ||==================//
//Implement the product create route
router.post("/create", createProduct);
//==================|| Product API Routes END -POST ||==================//



//==================|| Product API Routes START -GET BY ID ||==================//
router.get('/:id', getProduct)
//==================|| Product API Routes END -GET BY ID ||==================//





//==================|| Product API Routes START -GET ||==================//
// This route will handle the fetching of all products
router.get('/', getProducts);
//==================|| Product API Routes END -GET ||==================//



//==================|| Product API Routes START -UPDATE ||==================//
router.put('/edit/:id', editProduct)
//==================|| Product API Routes END -UPDATE ||==================//


//==================|| Product API Routes START - DELETE ||==================//
router.delete("/delete/:id", deleteProduct);

//==================|| Product API Routes END - DELETE ||==================//






export default router;