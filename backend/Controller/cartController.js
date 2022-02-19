const Carts = require('../Model/cartModel.js');

const CartCtrl = {
    async CreateCart(req,res){
        try {
            const {id_user, id_product,amount, createAt} = req.body;

            const NewCart = new Carts({
                id_user,
                id_product,
                amount,
                createAt,
          
            });
// hehehee
            await NewCart.save();
            return res.status(200).json({
                status:200,
                msg:"Create cart is successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                msg:"Create cart failed",
            });
            
        }
    },
};

module.exports = CartCtrl;