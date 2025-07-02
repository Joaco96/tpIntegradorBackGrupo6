import express from "express";
import env from "./src/api/config/env.js";
import cors from "cors";
import { logger } from './src/api/middlewares/middlewares.js'
import { productsRoutes, dashboardRoutes } from "./src/api/routes/index.js";
import { __dirname, join } from "./src/api/utils/index.js"

const app = express();
const port = env.port;

// Configuracion de EJS como motor de plantillas
app.set("view engine", "ejs");
// Servimos vistas desde raiz del proyecto
app.set("views", join(__dirname, "src/views"));
// Middleware para servir archivos estaticos
app.use(express.static(join(__dirname, "src/public")));

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (_req, res) => {
  res.send("Hola mundo");
});

app.use("/api/products", productsRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
