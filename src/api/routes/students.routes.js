import { Router } from "express";
import { validateId } from "../middlewares/middlewares.js";
import { createStudent, deleteUser, getAllStudents, getStudentsById, updateStudent } from "../controllers/students.controllers.js";
const router = Router();

router.get("/", getAllStudents);
router.get("/:id", validateId, getStudentsById);
router.post("/", createStudent);
router.put("/:id", validateId, updateStudent);
router.delete("/:id", validateId, deleteUser);

export default router;