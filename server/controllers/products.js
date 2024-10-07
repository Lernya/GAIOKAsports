import pool from "../db/index.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT product_id, product_name, product_description, price, category_name, categoryid, product_img FROM gaioka_products LEFT JOIN gaioka_categories ON gaioka_products.categoryid = gaioka_categories.category_id"
    );
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
    product_img,
  } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO gaioka_products (product_name, product_description, price, product_note1, categoryid, product_img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        product_name,
        product_description,
        price,
        product_note1,
        categoryid,
        product_img,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const {
    product_name,
    product_description,
    price,
    product_note1,
    categoryid,
    product_img,
  } = req.body;
  try {
    const result = await pool.query(
      "UPDATE gaioka_products SET product_name = $1, product_description = $2, price = $3, product_note1 = $4, categoryid = $5, product_img = $6 WHERE product_id = $7 RETURNING *",
      [
        product_name,
        product_description,
        price,
        product_note1,
        categoryid,
        product_img,
        id,
      ]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM gaioka_products WHERE product_id = $1", [id]);
    res.json({ message: `Product with the Product ID ${id} was deleted` });
  } catch (error) {
    next(error);
  }
};
