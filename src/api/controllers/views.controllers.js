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
      title: "Dashboard - Tech Shop",
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
  res.render("get-product", {
    title: "Consultar productos - Tech Shop",
  });
};

export const newProduct = async (req, res) => {
  // Servimos la vista en /dashboard/new-product
  res.render("new-product", {
    title: "Nuevo producto - Tech Shop Dashboard",
  });
};

export const editProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const respuestaProducto = await Products.findById(id);
    // Servimos la vista en /dashboard/edit-product
    res.render("edit-product", {
      title: "Editar producto - Tech Shop",
      producto: respuestaProducto,
    });
  } catch (error) {
    console.error("Error obteniendo la informacion", error.message);
    res.status(500).json({
      error: "Error interno al obtener la informacion",
    });
  }
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
      title: "Ventas - Tech Shop",
      ventas: respuestaVentas,
    });
  } catch (error) {
    console.error("Error obteniendo la informacion", error.message);
    res.status(500).json({
      error: "Error interno al obtener la informacion",
    });
  }
};

export const getSaleDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const detalleVenta = await Sales.findById(id);
    // Formateo de total de venta
    detalleVenta.total = NumberFormatter.format(detalleVenta.total);

    // Formateo de fecha y subtotal de venta
    detalleVenta.items.forEach((item) => {
      item.subtotal = NumberFormatter.format(item.quantity * item.productPrice);
    });

    res.render("sale-details", {
      title: "Detalle Venta - Tech Shop Dashboard",
      detalleVenta,
    });
  } catch (error) {
    console.error("Error obteniendo la informacion", error.message);
    res.status(500).json({
      error: "Error interno al obtener la informacion",
    });
  }
};
