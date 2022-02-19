const Categorys = require('../Model/categoryModel.js');
const CategoryCtrl = {

    // create new category
    async CreateCategor(req, res) {
        try {
            const { name } = req.body;
            const NewCategory = new Categorys({
                name: name,
            });

            if (!name)
                return res.status(400).json({
                    status: 400,
                    msg: "name of category is empty",
                });


            await NewCategory.save();
            return res.status(200).json({
                status: 200,
                msg: "Create new category is successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Create new category failed",
            });
        }
    },

    // get list category
    async GetListCategory(req, res) {
        try {
            const list = await Categorys.find({});

            return res.status(200).json({
                status: 200,
                msg: "Get list category is successfully",
                data: list,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Get list category failed",
            });
        }
    },

    // get single category
    async GetSingleCategory(req, res) {
        try {
            const id = req.params.id;
            const category = await Categorys.findById({ _id: id });

            return res.status(200).json({
                status: 200,
                msg: "Get single category is successfully",
                data: category,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Get single category failed",
            });
        }
    },
    // update category
    async UpdateCategory(req, res) {
        try {
            const id = req.params.id;
            const { name } = req.body;

            if (!name)
                return res.status(400).json({
                    status: 400,
                    msg: "name is not correct",
                });

            await Categorys.findByIdAndUpdate({ _id: id }, { name: name });
            return res.status(200).json({
                status: 200,
                msg: "Update category is successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Update category failed",
            });
        }
    },

    // delete category
    async DeleteCategory(req, res) {
        try {
            const id = req.params.id;

            await Categorys.findByIdAndDelete({ _id: id });
            return res.status(200).json({
                status: 200,
                msg: "Delete category is successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Delete category failed",
            });
        }
    },
};




module.exports = CategoryCtrl;