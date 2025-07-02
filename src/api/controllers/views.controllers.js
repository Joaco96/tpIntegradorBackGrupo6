import Students from "../models/students.models.js"

export const getAllStudents = async (req, res)=>{
  try{
    const respuestaProductos = Students.findAll();
    res.render("index", {
    title: "Tech Shop Dashboard",
    products: respuestaProductos,
  });
  } catch (error){
    console.error("Error obteniendo la informacion", error.message);
    res.status(500).json({
      error: "Error interno al obtener la informacion"
    })
  }
}

