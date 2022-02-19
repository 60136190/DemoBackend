const Users = require('../Model/userModel.js');

const UserCtrl = {

    // create new account
    async Register(req, res) {
        try {
            // crate variable email and password
            const { email, password } = req.body;
            const newUser = new Users({
                email: email,
                password: password,
            });

            // truy  vấn vào database
            await newUser.save()

            return res.status(200).json({
                status: 200,
                msg: 'Register successfully',
            });

        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: 'Register failed',
            });
        }
    },

    // login user

    async Login(req,res) {
        try {
            const {email , password} = req.body;
            const user = await Users.findOne({email: email});

            if(!email)
            return res.status(400).json({
                status:400,
                msg: "Email is empty",
            });

            if(!password)
            return res.status(400).json({
                status:400,
                msg:"Password is empty",
            });

            if(!user)
            return res.status(400).json({
                status:400,
                msg:"Email is not correct",
            });
            
            if(password !== user.password)
            return res.status(400).json({
                status:400,
                msg:"Password is not correct",
            });

            return res.status(200).json({
                status:200,
                msg: "Login is successfully",
            });
        } catch (error) {
            return res.status(400).json({
                status:400,
                msg:"Login failed",
            });
            
        }
    },


    // get all user
    async GetAllUser(req, res) {
        try {
            // find all user
            const all_user = await Users.find({});
            return res.status(200).json({
                status: 200,
                msg: "Get all user",
                data: all_user,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Get all user failed",
            });
        }
    },

    async GetSingleUser(req, res) {
        try {
            const id = req.params.id;
            const data = await Users.find({ _id: id });

            return res.status(200).json({
                status: 200,
                msg: "Get single user is successfully",
                data,
            });
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Get single user failed ",
            });
        }
    },

    // update user
    async UpdateUser(req, res) {
        try {
            //get id
            const id = req.params.id
            const { email, password } = req.body;

            if (!email) {
                return res.status(400).json({
                    status: 400,
                    msg: "Please input email"
                });
            } else if (!password) {
                return res.status(400).json({
                    status: 400,
                    msg: "Please input password"
                });
            } else {

                await Users.findByIdAndUpdate({ _id: id }, { email: email, password: password });

                return res.status(200).json({
                    status: 200,
                    msg: "Update user succesfully",
                });
            }
        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Update user failed",
            });
        }
    },

    // delete user
    async DeleteUser(req, res) {
        try {
            const id = req.params.id
            await Users.findByIdAndDelete({ _id: id });

            return res.status(200).json({
                status: 200,
                msg: "Delete user successfully"
            });

        } catch (error) {
            return res.status(400).json({
                status: 400,
                msg: "Delete user failed"
            });
        }
    },

    async ChangePassword(req, res) {
        try {
            const user = req.params.id;
            const oldPass = await Users.findById(user).select('password');
            const { password, newpassword, confirmpassword } = req.body;

            if (!password)
                return res.status(400).json({
                    status: 400,
                    msg: "Password is empty",
                });

            if (!newpassword)
                return res.status(400).json({
                    status: 400,
                    msg: "New password is empty",
                });

            if (!confirmpassword)
                return res.status(400).json({
                    status: 400,
                    msg: "Confirm password is empty",
                });

        
            if (newpassword !== confirmpassword)
                return res.status(400).json({
                    status: 400,
                    msg: "New password and confirm are not match",
                });

                if(password !== oldPass.password){
                    return res.status(400).json({
                        status: 400,
                        msg: "Old password is not correct",
                    });
                }
            await Users.findByIdAndUpdate(
                { _id: user },
                { password: newpassword },

            );
            return res.status(200).json({
                status: 200,
                msg: "Change password is successfully",
            });
        } catch (error) {
            return res.status(200).json({
                status: 400,
                msg: "Change password failed",
            });
        }
    },
};


module.exports = UserCtrl;