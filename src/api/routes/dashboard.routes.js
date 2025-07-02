import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";

import { getAllProducts, getProductById, getAllSales, newProduct, editProduct } from "../controllers/views.controllers.js";

const router = Router();

// Dashboard inicial
router.get("/", getAllProducts);

// Buscar producto por id
router.get("/get-product", getProductById);

// Nuevo producto
router.get("/new-product", newProduct);

// Editar producto
router.get("/edit-product/:id", editProduct);

// Eliminar producto por id
router.get("/delete-product", (req, res)=>{
  // Servimos la vista en /dashboard/delete-product
  res.render("delete-product", {
    title: "Eliminar producto",
  });
});

// Ventas
router.get("/sales", getAllSales);

export default router;