import connection from "../database/db.js";
import SaleItems from "./saleItems.models.js";

export default class Sales {
  static findAll = async () => {
    let sql = `SELECT * FROM sales`;
    const [result] = await connection.query(sql);
    return result;
  };

  static findById = async (id) => {
    let sql = `SELECT s.id, s.date, s.total, s.buyerName,
                JSON_ARRAYAGG(
                    JSON_OBJECT(
                      'productId', si.productId,
                      'productName', si.productName,
                      'quantity', si.quantity,
                      'productPrice', si.productPrice
                    )
                  ) AS items 
                FROM sales s 
                INNER JOIN sale_items si 
                ON s.id = si.saleId 
                WHERE s.id = ?
                GROUP BY s.id, s.date, s.total, s.buyerName;`;
    const result = await connection.query(sql, [id]);
    return result[0]?.[0];
  };

  static create = async (sale) => {
    if (sale.total && sale.items.length && sale.buyerName) {
      // Usamos una transaccion para que si falla alguna operacion del create, haga un rollback y vuelva atras todos los cambios hechos por la mitad.
     const conn = await connection.getConnection(); 
      try {
        await conn.beginTransaction();
        const [saleResult] = await conn.query(
          `INSERT INTO sales (total, buyerName) VALUES (?, ?)`,
          [sale.total, sale.buyerName]
        );

        const saleId = saleResult.insertId;

        const itemsData = sale.items.map(item => [
          saleId,
          item.productId,
          item.quantity,
          item.productPrice,
          item.productName
        ]);

        await SaleItems.createMany(itemsData, conn)

        await conn.commit();
        conn.release();
        return true;

      } catch (error) {
        await conn.rollback();
        conn.release();
        console.error("Error al crear la venta:", error);
        return false;
      }
    }
    return false;
  };
}
