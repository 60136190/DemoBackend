const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// link root user
const user = require('./Routes/userRouter.js');
app.use('/user/',user);

// link root product
const product = require('./Routes/productRouter.js');
app.use('/product/',product);

// link root payment
const payment = require('./Routes/paymentRouter.js');
app.use('/payment/',payment);

// link root category
const category = require('./Routes/categoryRouter.js');
app.use('/category',category);

// link root cart
const cart = require('./Routes/cartRouter.js');
app.use('/cart',cart);

//!Middleware for error
module.exports = app;
