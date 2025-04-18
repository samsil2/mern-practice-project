import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controller/product.controller.js";



const router = express.Router();

// Get all products
router.get("/", getProducts);

// Create a new product

router.post("/", createProduct);

// Update a product

router.put("/:id", updateProduct)


// Delete a product
router.delete("/:id", deleteProduct);


export default router;