const express = require('express');
const router = express.Router();
const CartCtrl = require('../Controller/cartController.js');

// create cart
router.post('/create',CartCtrl.CreateCart);


module.exports = router;