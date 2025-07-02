import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";
import { createProduct, deleteProduct, getAllProducts, getProductsById, updateProduct } from "../controllers/products.controllers.js";
const router = Router();

router.get("/", getAllProducts);
router.get("/:id", validateId, getProductsById);
router.post("/", createProduct);
router.put("/:id", validateId, updateProduct);
router.delete("/:id", validateId, deleteProduct);

export default router;