import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";
import { createSale, getAllSales, getSaleById } from "../controllers/sales.controllers.js";
const router = Router();

router.get("/", getAllSales);
router.get("/:id", validateId, getSaleById);
router.post("/", createSale);

export default router;