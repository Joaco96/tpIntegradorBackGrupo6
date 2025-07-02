import connection from "../database/db.js";

export default class SaleItems {
  static findBySaleId = async (saleId) => {
    let sql = `SELECT * FROM sale_items WHERE saleId = ?`;
    const [result] = await connection.query(sql, [saleId]);
    return result;
  };

  static create = async (saleItem) => {
    if (saleItem.saleId && saleItem.productId && saleItem.quantity) {
      let sql = `INSERT INTO sale_items (saleId, productId, quantity, productPrice, productName) VALUES (?, ?, ?, ?, ?)`;
      const result = await connection.query(sql, [
        saleItem.saleId,
        saleItem.productId,
        saleItem.quantity,
        saleItem.productPrice,
        saleItem.productName,
      ]);
      return result.affectedRows > 0;
    }
    return false;
  };
}
