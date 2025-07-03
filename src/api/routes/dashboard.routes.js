import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";

import {
  getAllProducts,
  getProductById,
  getAllSales,
  newProduct,
  editProduct,
  getSaleDetails,
} from "../controllers/views.controllers.js";

const router = Router();

// Dashboard inicial
router.get("/", getAllProducts);

// Buscar producto por id
router.get("/get-product", getProductById);

// Nuevo producto
router.get("/new-product", newProduct);

// Editar producto
router.get("/edit-product/:id", editProduct);

// Ventas
router.get("/sales", getAllSales);

// Detalle de Venta
router.get("/sales/details/:id", validateId, getSaleDetails);

export default router;
