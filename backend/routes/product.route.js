import express from "express";
import { getProducts,deleteProducts, createProducts, updateProducts } from "../controllers/product.controller.js";
const router = express.Router();

router.get("/",getProducts);
router.put("/:id",updateProducts);
router.post("/",createProducts);
router.delete("/:id",deleteProducts);

export default router;