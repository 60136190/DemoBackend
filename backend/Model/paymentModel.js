const mongoose = require('mongoose');

const PaymentShema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    }

});

module.exports = mongoose.model('payment',PaymentShema);