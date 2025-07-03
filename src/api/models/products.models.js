import connection from "../database/db.js";

export default class Products {
  static findAll = async () => {
    let sql = `SELECT * FROM products`;
    const [rows] = await connection.query(sql);
    return rows;
  };

  static findById = async (id) => {
    let sql = `SELECT * FROM products WHERE id = ?`;
    const [result] = await connection.query(sql, [id]);
    return result[0];
  };

  static create = async (product) => {
    if (product.name && product.category && product.image && product.price) {
      let sql = `INSERT INTO products (category, image, name, price) VALUES (?, ?, ?, ?)`;
      const [result] = await connection.query(sql, [
        product.category,
        product.image,
        product.name,
        product.price,
      ]);
      return result.affectedRows > 0;
    }
    return false;
  };

  static update = async (existingData, newData) => {
    let sql = `
        UPDATE products
        SET name = ?, image = ?, price = ?, category = ?, is_active = ?
        WHERE id = ?
    `;
    const [result] = await connection.query(sql, [
      newData.name ?? existingData.name,
      newData.image ?? existingData.image,
      newData.price ?? existingData.price,
      newData.category ?? existingData.category,
      newData.is_active ?? existingData.is_active,
      existingData.id,
    ]);
    return result.affectedRows > 0;
  };

  static delete = async (id) => {
    let sql = `
        UPDATE products
        SET is_active = 0
        WHERE id = ?
    `;
    const [result] = await connection.query(sql, [id]);
    return result.affectedRows > 0;
  };
}
