const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.route.js");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //the actual work of parsing the incoming data is done by body-parser

// Routes
app.use("/", productRoutes);




// MongoDB connection
mongoose
  .connect("mongodb+srv://abhishekkewat7566_db_user:8Yf7CTvZJePsoSs7@firstclustor.0eoiecw.mongodb.net/firstclustor")
  .then(() => {
    console.log("MongoDB Connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
