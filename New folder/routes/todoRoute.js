const express = require("express");
const route = express.Router();

const toDoController = require("../controllers/todoController")
const toDoSeed = require("../seed/toDoSeed")
const isAuth = require("../middleware/AuthMiddleware");

route.post("/add", isAuth, toDoController.addToDo);
route.delete("/delete/:toDoId", isAuth, toDoController.deleteToDo);
route.get("/get/:toDoId", isAuth, toDoController.getToDo);
route.get("/getAll", isAuth, toDoController.getAllToDo);
route.put("/update/:toDoId", isAuth, toDoController.updateToDo);


/////////////////////////toDo seed//////////////////////////////////////////////////
route.get("/seed/toDo", isAuth, toDoSeed.seedToDo)


module.exports = route

