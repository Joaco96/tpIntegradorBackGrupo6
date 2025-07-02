import Products from "../models/products.models.js"

export const getAllProducts = async (req, res)=>{
  try{
    const respuestaProductos = await Products.findAll();
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

