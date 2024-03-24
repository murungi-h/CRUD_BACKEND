require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models");
const productRouter = require("./routes/product.route");
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const MONGO = process.env.MONGO_STRING;

mongoose
  .connect(MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3005, () => {
      console.log(`Server is running on port ${3005}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
