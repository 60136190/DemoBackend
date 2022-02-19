const mongoose = require('mongoose');


const CartSchema = new mongoose.Schema({
    id_uer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true,
    },
    id_product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required:true,
    },
    amount : {
        type: Number,
        required: true,
    },
    createAt:{
        type:String,
        required: true,
    }
});

module.exports = mongoose.model('cart',CartSchema);