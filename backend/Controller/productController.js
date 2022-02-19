const Products = require('../Model/productModel.js');

const ProductCtrl = {
    // create new product
    async CreateProduct(req, res) {
        try {
            const { name, size, price, category } = req.body;
            const newProduct = new Products({
                name,
                size,
                price,
                category,
            });

            // truy vấn database
            await newProduct.save();

            return res.status(200).json({
                status: 200,
                msg: "Add product successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Add product  failed"
            })
        }
    },

    // get all product
    async GetAllProduct(req, res) {
        try {
            const all_Product = await Products.find({});
            return res.status(200).json({
                status: 200,
                msg: "Get all product is successfully",
                data: all_Product,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Get all product  failed",
            });
        }
    },


    async GetSingleProduct(req, res) {
        try {
            const id = req.params.id;
            const data = await Products.find({ _id: id });

            return res.status(200).json({
                status: 200,
                msg: "Get single product is successfully",
                data,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Get single product  failed",
            });
        }
    },

    // update product
    async UpdateProduct(req, res) {
        try {
            const id = req.params.id
            const { name, size, price, category } = req.body;
            if (!name)
                return res.status(400).json({
                    status: 400,
                    msg: "Please input name",
                });
            if (!size)
                return res.status(400).json({
                    status: 400,
                    msg: "Please input size ",
                });
            if (!price)
                return res.status(400).json({
                    status: 400,
                    msg: "Please input price",
                });

            if (!category)
                return res.status(400).json({
                    status: 400,
                    msg: "Category is not correct",
                });

            await Products.findByIdAndUpdate({ _id: id }, { name: name, size: size, price: price , category:category});

            return res.status(200).json({
                status: 200,
                msg: "Update product successfully",
            });

        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Update product  failed",
            });
        }
    },

    async DeleteProduct(req, res) {
        try {
            const id = req.params.id;

            await Products.findByIdAndDelete({ _id: id });
            return res.status(200).json({
                status: 200,
                msg: "Delete product successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Delete product failed",
            });

        }
    },



};


module.exports = ProductCtrl;