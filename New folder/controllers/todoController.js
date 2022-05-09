const toDo = require("../models/todomodule");
const User = require("../models/userModule");

exports.addToDo = async (req, res, next) => {
    const userId = req.params.id
    const title = req.body.title;
    const description = req.body.description;
    const data = req.body.data;
    try {

        const userFounded = await User.findById(userId);
        if (userFounded) {
            const todo = new toDo({
                title: title,
                description: description,
                data: data,
                user: userId
            })
            const todoSaved = await todo.save();
            res.status(200).json({
                message: "Done",
                toDo: todoSaved
            })
        } else {
            const error = new Error("user not found");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        next(error);
    }
}


exports.deleteToDo = async (req, res, next) => {
    const userId = req.params.userId;
    const toDoId = req.params.toDoId;
    console.log(userId)
    try {
        const toDoFounded = await toDo.findById(toDoId);
        console.log(toDoFounded.user)
        if (toDoFounded.user.toString() === userId) {
            if (toDoFounded) {
                const deletedToDo = await toDo.findByIdAndRemove(toDoId);
                res.status(200).json({
                    message: "Done",
                    toDo: deletedToDo
                })
            } else {
                const error = new Error("user not found");
                error.statusCode = 404;
                throw error;
            }
        } else {
            const error = new Error("this to do is belong to anther user");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        next(error);
    }
}



exports.updateToDo = async (req, res, next) => {
    const userId = req.params.userId;
    const toDoId = req.params.toDoId;
    const title = req.body.title;
    const description = req.body.description;
    const data = req.body.data;
    try {
        const toDoFounded = await toDo.findById(toDoId);
        if (toDoFounded) {
            if (toDoFounded.user.toString() === userId) {
                toDoFounded.title = title || toDoFounded.title
                toDoFounded.description = description || toDoFounded.description
                toDoFounded.data = data || toDoFounded.data
                const updatedToo = await toDoFounded.save();
                res.status(200).json({
                    message: "Done",
                    toDo: updatedToo
                })
            } else {
                const error = new Error("this to do is belong to anther user");
                error.statusCode = 404;
                throw error;
            }
        } else {
            const error = new Error("toDo not found");
            error.statusCode = 404;
            throw error;
        }

    } catch (error) {
        next(error);
    }
}



exports.getToDo = async (req, res, next) => {
    const userId = req.params.userId;
    const toDoId = req.params.toDoId;
    try {
        const toDoFounded = await toDo.find({
            _id: toDoId,
            user: userId
        });
        if (toDoFounded.length != 0) {
            res.status(200).json({
                message: "Done",
                toDo: toDoFounded
            })
        } else {
            const error = new Error("toDo not found");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        next(error);
    }
}



// exports.getAllToDo = async (req, res, next) => {
//     const userId = req.params.userId
//     try {
//         const toDoFounded = await toDo.find({
//             user: userId
//         });
//         if (toDoFounded.length != 0) {
//             res.status(200).json({
//                 message: "Done",
//                 toDo: toDoFounded
//             })
//         } else {
//             const error = new Error("your todo is empty");
//             error.statusCode = 404;
//             throw error;
//         }
//     } catch (error) {
//         next(error);
//     }
// }