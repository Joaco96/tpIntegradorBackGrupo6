import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";

import { getAllProducts } from "../controllers/views.controllers.js";

const router = Router();

router.get("/", getAllProducts);

router.get("/consultar", (req, res)=>{
  // Servimos la vista en /dashboard/consultar
  res.render("consultar", {
    title: "Consultar productos",
    about:"Esta es una app que usa EJS con express"
  });
});

export default router;