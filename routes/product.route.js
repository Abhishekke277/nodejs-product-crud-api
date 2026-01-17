const express = require("express");
const auth = require("../middleware/auth.middleware");
const router = express.Router();

const {
  home,
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controller");

// Public routes
router.get("/", home);
router.get("/all", getAllProducts);
router.get("/:id", getProductById);

// Protected routes
router.post("/create", auth, createProduct);
router.put("/:id", auth, updateProductById);
router.delete("/:id", auth, deleteProductById);

module.exports = router;
