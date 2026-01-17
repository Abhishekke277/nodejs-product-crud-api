require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth.route");
const productRoutes = require("./routes/product.route");

const app = express();

/* 🔹 Middleware */
app.use(express.json()); // parse JSON body
app.use(express.urlencoded({ extended: false }));

/* 🔹 Routes */
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

/* 🔹 MongoDB Connection */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));

