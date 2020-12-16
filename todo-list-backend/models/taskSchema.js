const uniqid = require("uniqid");
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskId:{
        type: String,
        default: uniqid()
    },
    taskName:{
        type:String,
        validate:{
            validator: function(){
                return this.taskName.trim().length;
            },
        message: "Task name should be a non-empty string"
        }
    },
    status:{
        type: String,
        default: "Not Started",
        enum: ["Not Started","In Progress","Completed"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;