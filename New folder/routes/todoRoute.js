const express = require("express");
const route = express.Router();

const toDoController = require("../controllers/todoController")
// const isAuth = require("../middleware/AuthMiddleware");

route.post("/add/:id", toDoController.addToDo);
route.delete("/delete/:toDoId/:userId", toDoController.deleteToDo);
route.get("/get/:toDoId/:userId", toDoController.getToDo);

route.put("/update/:toDoId/:userId", toDoController.updateToDo);


module.exports = route

