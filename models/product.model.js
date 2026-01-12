const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true, // Remove leading/trailing whitespace
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: 0,
    },
    description: {
      type: String,
      trim: true,
    },
  
    createdAt: {  //timestamp field
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
