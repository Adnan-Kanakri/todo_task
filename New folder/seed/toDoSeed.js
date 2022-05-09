const toDo = require("../models/todomodule");
require("dotenv").config({ path: "../.env" });
require("../config/dataBase");

const asyncFunc = require("express-async-handler");



exports.seedToDo = asyncFunc(async (req, res, next) => {
    const toDos = [
        {
            title: "first toDo",
            description: "my first description for my first toDo",
            data: Date.now(),
            user: req.payload
        },
        {
            title: "second toDo",
            description: "my first description for my first toDo",
            data: Date.now(),
            user: req.payload
        },
        {
            title: "third toDo",
            description: "my third description for my third toDo",
            data: Date.now(),
            user: req.payload
        }
        ,
        {
            title: "fourth toDo",
            description: "my fourth description for my fourth toDo",
            data: Date.now(),
            user: req.payload
        },
        {
            title: "fifth toDo",
            description: "my fifth description for my fifth toDo",
            data: Date.now(),
            user: req.payload
        },
        {
            title: "sixth toDo",
            description: "my sixth description for my sixth toDo",
            data: Date.now(),
            user: req.payload
        }
    ]
    const toDoSave = await toDo.insertMany(toDos);
    res.send({
        useSave: toDoSave
    })
})



