const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const validateProduct = require("../utils/validateProduct");
const { isAuth, isAdmin } = require("../middlewares/authMiddlewares");
const productRoutes = express.Router();

productRoutes.post("/", isAuth, validateProduct, createProduct);
productRoutes.get("/", isAuth, getAllProducts);
productRoutes.get("/:id", isAuth, getProductById);
productRoutes.put("/:id", isAuth, isAdmin, validateProduct, updateProduct);
productRoutes.delete("/:id", deleteProduct);

module.exports = productRoutes;
