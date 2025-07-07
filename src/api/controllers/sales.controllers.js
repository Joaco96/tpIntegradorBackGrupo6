import Sales from "../models/sales.models.js";
import { NumberFormatter } from "../utils/numberFormatter.js";

export const getAllSales = async (_req, res) => {
  try {
    res.status(200).json(await Sales.findAll());
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar obtener ventas";
    res.status(500).json(error);
  }
};

export const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundSale = await Sales.findById(id);
    if (!foundSale)
      return res
        .status(404)
        .json({ error: `No encontramos la venta con id: ${id}` });

    res.status(200).json(foundSale);
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar obtener la venta";
    res.status(500).json(error);
  }
};

export const createSale = async (req, res) => {
  try {
    const data = req.body;

    if (!data.buyerName || !data.items.length || !data.total)
      return res
        .status(400)
        .json({ error: `Nos faltan datos para crear la venta` });

    const createdId = await Sales.create(data);
    if (createdId) return res.status(201).json({ id: createdId });

    return res
      .status(500)
      .json({ error: `Hubo un error al intentar crear la venta` });
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar crear venta";
    res.status(500).json(error);
  }
};
