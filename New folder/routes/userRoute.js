const express = require("express");
const route = express.Router();

const usersController = require("../controllers/userController")
// const isAuth = require("../middleware/AuthMiddleware");



const seedRouter = require("../seed/UserSeed");
route.get("/seed/user", seedRouter.seedUser)


module.exports = route