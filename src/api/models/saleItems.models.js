export default class SaleItems {
  static createMany = async (saleItems, conn) => {
    await conn.query(
      `INSERT INTO sale_items (saleId, productId, quantity, productPrice, productName) VALUES ?`,
      [saleItems]
    );
  };
}
