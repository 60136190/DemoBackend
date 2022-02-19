const express = require('express');
const router = express.Router();
const PaymentCtrl = require('../Controller/paymentController.js');

// create a method of payment
router.post('/addPayment',PaymentCtrl.CreatePayment);

// get list method of payment
router.get('/getAll',PaymentCtrl.GetListPayment);

// get single method of payment
router.get('/getSinglePayment/:id',PaymentCtrl.GetSinglePayment);

// update method of payment
router.patch('/updatePayment/:id',PaymentCtrl.UpdatePayment);

// delete method of payment
router.delete('/deletePayment/:id',PaymentCtrl.DeletePayment);
module.exports = router;