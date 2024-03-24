const Product = require('../models/product.models');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const getOneProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

const addProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ product });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

const modifyProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
          res.status(404).json({ message: "Product does not found" });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
          res.status(404).json({ message: "Product does not found" });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports = {
    getProducts,
    getOneProduct,
    addProducts,
    modifyProduct,
    deleteProduct
}
