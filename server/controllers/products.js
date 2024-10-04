import pool from "../db/index.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM gaioka_products");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM gaioka_products WHERE product_id = $1",
      [id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const addNewProduct = async (req, res, next) => {
  const {
    product_name,
    product_description,
    price,
    product_note1,
    categoryid,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO gaioka_products (product_name, product_description, price, product_note1, categoryid) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [product_name, product_description, price, product_note1, categoryid]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const { product_id } = req.params;
  const {
    product_name,
    product_description,
    price,
    product_note1,
    categoryid,
  } = req.body;
  try {
    const result = await pool.query(
      "UPDATE gaioka_products SET product_name = $1, product_description = $2, price = $3, product_note1 = $4, categoryid = $5 WHERE product_id = $6 RETURNING *",
      [
        product_name,
        product_description,
        price,
        product_note1,
        categoryid,
        product_id,
      ]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { product_id } = req.params;
  try {
    await pool.query("DELETE FROM gaioka_products WHERE product_id = $1", [
      product_id,
    ]);
    res.json({ message: "Product with the id ${product_id} was deleted" });
  } catch (error) {
    next(error);
  }
};
