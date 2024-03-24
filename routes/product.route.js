const express = require('express');
const { getProducts, getOneProduct, addProducts, modifyProduct, deleteProduct } = require('../controllers/product.controller');

const router = express.Router();

router.get('/', getProducts);

router.get('/:id', getOneProduct);

router.post('/', addProducts);

router.put('/:id', modifyProduct);

router.delete('/:id', deleteProduct);


module.exports = router;
