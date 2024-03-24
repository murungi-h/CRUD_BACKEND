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



mongoose
  .connect(
    "mongodb+srv://hmmanyire:8tlfT87P8pY06I64@backenddb.eajg16m.mongodb.net/NODE_API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3005, () => {
      console.log(`Server is running on port ${3005}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
