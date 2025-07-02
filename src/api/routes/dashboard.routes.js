import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";

import { getAllProducts, getProductById, getAllSales } from "../controllers/views.controllers.js";

const router = Router();

// Dashboard inicial
router.get("/", getAllProducts);

// Buscar producto por id
router.get("/get-products", getProductById);

// Nuevo producto
router.get("/new-product", (req, res)=>{
  // Servimos la vista en /dashboard/new-product
  res.render("new-product", {
    title: "Nuevo producto",
  });
});

// Editar producto
router.get("/edit-product", (req, res)=>{
  // Servimos la vista en /dashboard/edit-product
  res.render("edit-product", {
    title: "Editar producto",
   });
});

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