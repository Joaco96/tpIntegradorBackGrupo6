import express from "express";
import env from "./src/api/config/env.js";
import cors from "cors";
import { logger } from './src/api/middlewares/middlewares.js'
import studentsRoutes from "./src/api/routes/students.routes.js";

const app = express();
const port = env.port;

app.use(cors());
app.use(express.json());
app.use(logger);

app.get("/", (_req, res) => {
  res.send("Hola mundo");
});

app.use("/api/students", studentsRoutes)

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
