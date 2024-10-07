import pool from "../db/index.js";

export const getAllCategories = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM gaioka_categories");
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getCategoryById = async (req, res, next) => {
  const { category_id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM gaioka_categories WHERE category_id = $1",
      [category_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const addNewCategory = async (req, res, next) => {
  const { category_name, category_note1 } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO gaioka_categories (category_name, category_note1) VALUES ($1, $2) RETURNING *",
      [category_name, category_note1]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  const { category_id } = req.params;
  const { category_name, category_note1 } = req.body;
  try {
    const result = await pool.query(
      "UPDATE gaioka_categories SET category_name = $1, category_note1 = $2 WHERE product_id = $3 RETURNING *",
      [category_name, category_note1, category_id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  const { category_id } = req.params;
  try {
    await pool.query("DELETE FROM gaioka_categories WHERE category_id = $1", [
      category_id,
    ]);
    res.json({ message: "Category with the id ${category_id} was deleted" });
  } catch (error) {
    next(error);
  }
};
