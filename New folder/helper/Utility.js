const JWT = require("jsonwebtoken");

exports.generateToken = (user) => {
    const token = JWT.sign({
        user: user._id
    }, process.env.TOKEN_SECRET_KEY, {
        expiresIn: "30d"
    })
    return token;
}