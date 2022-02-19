// const Users = require('../Model/userModel.js');

// const authUser = async (req,res,next) => {
//     try {
//         const user = await Users.findOne({
//             _id: req.params.id,
//           });
//           next();
//         } catch (err) {
//           return res.status(400).json({
//             status: 400,
//             msg: err.message,
//           });
//         }
//       };

// module.exports = authUser;