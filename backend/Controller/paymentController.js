const Payments = require('../Model/paymentModel.js');

const PaymentCtrl = {

    // create new method of payment
    async CreatePayment(req, res) {
        try {
            const { name } = req.body;
            const NewPayment = new Payments({
                name: name
            });

            await NewPayment.save();
            return res.status(200).json({
                status: 200,
                msg: "Create payment is successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Create payment  failed",
            });
        }
    },

    // get list method of payment
    async GetListPayment(req, res) {
        try {
            const list = await Payments.find({});
            return res.status(200).json({
                status: 200,
                msg: "Get list method of paymeny successfully",
                data: list,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Get list payment failed",
            });
        }
    },

    // update method of payment
    async UpdatePayment(req, res) {
        try {
            const id = req.params.id;
            const { name } = req.body;

            if (!name)
                return res.status(400).json({
                    status: 400,
                    msg: "name is empty",
                });

            await Payments.findByIdAndUpdate({ _id: id }, { name: name });
            return res.status(200).json({
                status: 200,
                msg: "Update method of payment is successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Update method of payment  failed",
            });
        }
    },

    // delete method of payment
    async DeletePayment(req, res) {
        try {
            const id = req.params.id;

            await Payments.findOneAndDelete({ _id: id });
            return res.status(200).json({
                status: 200,
                msg: "Delete payment is successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Delete payment failed",
            })
        }
    },

    //get single method of payment
    async GetSinglePayment(req, res) {
        try {
            const id = req.params.id;

            const payment = await Payments.findById({ _id: id });
            return res.status(200).json({
                status: 200,
                msg: "Get single payment is successfully",
                data: payment,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Get single payment failed",
            });
        }
    },
};

module.exports = PaymentCtrl;