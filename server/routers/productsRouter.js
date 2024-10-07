import express from "express";

import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/products.js";

const productsRouter = express.Router();

productsRouter.route("/").get(getAllProducts).post(addNewProduct);
productsRouter
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

export default productsRouter;
