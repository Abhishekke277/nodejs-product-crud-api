const express = require("express");
const router = express.Router(); //import express router for route handling

const {
  home,
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/product.controller");

// CREATE (put this first)
router.post("/create", createProduct);

// READ ALL
router.get("/all", getAllProducts);

// READ ONE
router.get("/:id", getProductById);

// UPDATE
router.put("/:id", updateProductById);

// DELETE
router.delete("/:id", deleteProductById);

// HOME (keep this LAST)
router.get("/", home);

module.exports = router;
