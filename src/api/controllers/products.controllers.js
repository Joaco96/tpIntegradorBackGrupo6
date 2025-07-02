import Products from "../models/products.models.js";

export const getAllProducts = async (_req, res) => {
  try {
    res.status(200).json(await Products.findAll());
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar obtener productos";
    res.status(500).json(error);
  }
};

export const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const foundResource = await Products.findById(id);
    if (!foundResource)
      return res
        .status(404)
        .json({ error: `No encontramos el producto con id: ${id}` });
    res.status(200).json(foundResource);
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar obtener al producto";
    res.status(500).json(error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    if (!data.id || !data.name)
      return res
        .status(400)
        .json({ error: `Nos faltan datos para crear al producto` });

    const foundResource = await Products.findById(data.id);
    if (foundResource)
      return res.status(409).json({ error: `Ya existe producto con ese id` });

    const created = await Products.create(data);
    if (created) return res.status(201).json({ message: `Creado con exito` });

    return res
      .status(500)
      .json({ error: `Hubo un error al intentar crear al producto` });
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar crear producto";
    res.status(500).json(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!data.name)
      return res
        .status(400)
        .json({ error: `Nos faltan datos para actuaizar al producto` });

    const foundResource = await Products.findById(id);
    if (!foundResource)
      return res.status(404).json({ error: `No existe producto con ese id` });

    const updated = await Products.update(id, data);
    if (updated)
      return res.status(200).json({ message: `Actualizado con exito` });

    return res
      .status(500)
      .json({ error: `Hubo un error al intentar actualizar al producto` });
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar crear producto";
    res.status(500).json(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const foundResource = await Products.findById(id);
    if (!foundResource)
      return res.status(404).json({ error: `No existe producto con ese id` });

    const deleted = await Products.delete(id);
    if (deleted)
      return res.status(200).json({ message: `Eliminado con exito` });

    return res
      .status(500)
      .json({ error: `Hubo un error al intentar eliminar al producto` });
  } catch (error) {
    console.error(error);
    error.message = "Error al intentar crear producto";
    res.status(500).json(error);
  }
};
