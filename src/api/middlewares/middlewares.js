const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ---> ${req.method} - ${req.path}`);
  next();
}

const validateId = (req, res, next) => {
  const id = req.params.id;
  if(!id || isNaN(id)) return res.status(400).json({ error: `Tenes que ingresar un id válido` });
  next();
}

export default {
  logger,
  validateId
}