import connection from "../database/db.js";

export default class Sales {
  static findAll = async () => {
    let sql = `SELECT * FROM sales`;
    return await connection.query(sql);
  };

  static findById = async (id) => {
    let sql = `SELECT * FROM sales WHERE id = ?`;
    const result = await connection.query(sql, [id]);
    return result[0];
  };

  static create = async (sale) => {
    if (sale.date && sale.total && sale.name) {
      let sql = `INSERT INTO sales (date, total, name) VALUES (?, ?, ?)`;
      const result = await connection.query(sql, [sale.date, sale.total, sale.name]);
      return result.affectedRows > 0;
    }
    return false;
  };
}
