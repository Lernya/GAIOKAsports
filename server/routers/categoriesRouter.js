import express from "express";

import {
  addNewCategory,
  deleteCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/categories.js";

const categoriesRouter = express.Router();

categoriesRouter.route("/").get(getAllCategories).post(addNewCategory);
categoriesRouter
  .route("/:id")
  .get(getCategoryById)
  .put(updateCategory)
  .delete(deleteCategory);

export default categoriesRouter;
