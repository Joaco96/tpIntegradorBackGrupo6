import Student from "../models/Student.js";

export const getAllStudents = async (_req, res) => {
  try {

    res.status(200).json(Student.findAll());
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar obtener estudiantes";
    res.status(500).json(error);
  }
}

export const getStudentsById = async (req, res) => {
  try {
    const { id } = req.params;
    // let sql = `SELECT * FROM products WHERE id = ${id}`; Inyeccion sql
    // let [rows] = await connection.query(sql);
    // let sql = `SELECT * FROM products WHERE id = ?`;
    // let [rows] = await connection.query(sql, [id]);
    const foundResource = Student.findById(id);
    if (!foundResource)
      return res
        .status(404)
        .json({ error: `No encontramos el estudiante con id: ${id}` });
    res.status(200).json(foundResource);
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar obtener al estudiante";
    res.status(500).json(error);
  }
}

export const createStudent = async (req, res) => {
  try {
    const data = req.body;
    if (!data.id || !data.name)
      return res
        .status(400)
        .json({ error: `Nos faltan datos para crear al estudiante` });

    const foundResource = Student.findById(data.id);
    if (foundResource)
      return res.status(409).json({ error: `Ya existe estudiante con ese id` });

    const created = Student.create(data);
    if (created) return res.status(201).json({ message: `Creado con exito` });

    return res
      .status(500)
      .json({ error: `Hubo un error al intentar crear al estudiante` });
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar crear estudiante";
    res.status(500).json(error);
  }
}

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!data.name)
      return res
        .status(400)
        .json({ error: `Nos faltan datos para actuaizar al estudiante` });

    const foundResource = Student.findById(id);
    if (!foundResource)
      return res.status(404).json({ error: `No existe estudiante con ese id` });

    const updated = Student.update(id, data);
    if (updated)
      return res.status(200).json({ message: `Actualizado con exito` });

    return res
      .status(500)
      .json({ error: `Hubo un error al intentar actualizar al estudiante` });
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar crear estudiante";
    res.status(500).json(error);
  }
}

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const foundResource = Student.findById(id);
    if (!foundResource)
      return res.status(404).json({ error: `No existe estudiante con ese id` });

    const deleted = Student.delete(id);
    if (deleted)
      return res.status(200).json({ message: `Eliminado con exito` });

    return res
      .status(500)
      .json({ error: `Hubo un error al intentar eliminar al estudiante` });
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar crear estudiante";
    res.status(500).json(error);
  }
}