const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ToDoSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true
    },
    user: {
        type: schema.Types.ObjectId,
        ref: "Users",
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("toDo", ToDoSchema);