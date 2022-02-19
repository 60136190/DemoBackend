const express = require('express');
const router = express.Router();
const ProductCtrl = require('../Controller/productController.js');

// add product
router.post('/addProduct',ProductCtrl.CreateProduct);

// get all product
router.get('/getAllProduct',ProductCtrl.GetAllProduct);

// get single product
router.get('/getSingleProduct/:id',ProductCtrl.GetSingleProduct);

// update product
router.patch('/updateProduct/:id',ProductCtrl.UpdateProduct);

// delete product
router.delete('/deleteProduct/:id',ProductCtrl.DeleteProduct);


module.exports = router;