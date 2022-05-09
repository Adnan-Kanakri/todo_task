const Bcrypt = require("bcryptjs");
const User = require("../models/userModule");
const generate = require("../helper/Utility");

exports.signInUser = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({
            email: email
        })
        if (user) {
            let passwordCheck = await Bcrypt.compare(password, user.password);
            if (passwordCheck) {
                res.status(200).json({
                    message: "Done",
                    user: user,
                    token: generate.generateToken(user)
                })
            } else {
                // console.log("password")
                // const error = new Error("password wrong")
                // console.log(error.message)
                res.status(406).json({
                    message: "password wrong"
                })
                // throw httpError.NotAcceptable({
                //     message: error.message
                // })
            }
        } else {
            res.status(404).json({
                message: "Invalid email or password"
            })
        }
    } catch (error) {
        next(error);
    }
}
