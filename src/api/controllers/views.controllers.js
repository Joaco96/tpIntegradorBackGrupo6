import Products from "../models/products.models.js";
import Sales from "../models/sales.models.js";
import { NumberFormatter } from "../utils/numberFormatter.js";

export const getAllProducts = async (req, res) => {
  try {
    const respuestaProductos = await Products.findAll();

    // Formateo de precio de venta
    respuestaProductos.forEach((prod) => {
      prod.price = NumberFormatter.format(prod.price);
    });

    res.render("index", {
      title: "Tech Shop Dashboard",
      products: respuestaProductos,
    });
  } catch (error) {
    console.error("Error obteniendo la informacion", error.message);
    res.status(500).json({
      error: "Error interno al obtener la informacion",
    });
  }
};

export const getProductById = async (req, res) => {
  // Servimos la vista en /dashboard/get-products
  res.render("get-products", {
    title: "Consultar productos",
  });
};

export const getAllSales = async (req, res) => {
  try {
    const respuestaVentas = await Sales.findAll();

    // Formateo de fecha y total de venta
    respuestaVentas.forEach((venta) => {
      venta.total = NumberFormatter.format(venta.total);
      venta.date = venta.date.toLocaleDateString();
    });

    res.render("sales", {
      title: "Ventas - Tech Shop Dashboard",
      ventas: respuestaVentas,
    });
  } catch (error) {
    console.error("Error obteniendo la informacion", error.message);
    res.status(500).json({
      error: "Error interno al obtener la informacion",
    });
  }
};
