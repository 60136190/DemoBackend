const express = require('express');
const router = express.Router();
const CategoryCtrl = require('../Controller/categoryController.js');


// create new category
router.post('/addCategory',CategoryCtrl.CreateCategor);

// get list category
router.get('/getAll',CategoryCtrl.GetListCategory);

//get single category
router.get('/getSingle/:id',CategoryCtrl.GetSingleCategory);

// updae category
router.patch('/update/:id',CategoryCtrl.UpdateCategory);

// delete category
router.delete('/delete/:id',CategoryCtrl.DeleteCategory);


module.exports = router;