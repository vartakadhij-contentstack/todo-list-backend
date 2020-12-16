const mongoose = require("mongoose");
const Task = require("../models/taskSchema");
const uniqid = require("uniqid");
const sendErrorMessage = require("../helpers/sendError");
const AppError = require("../helpers/appErrorClass");
const sendResponse = require("../helpers/sendResponse");

const getAllTasks = async (req,res,next)=>{
    let tasks = Task.find().then((allTasks)=>{
        console.log("All tasks",allTasks);
        sendResponse(200,"Tasks fetched",allTasks,req,res);
    })
    .catch((err)=>{
        console.log(err);
        sendErrorMessage(new AppError(400,"Unsuccessful","Tasks not fetched"),req,res);
    })  
}

const createTask = (req,res,next) => {
    let newTask = new Task( {
        taskName: req.body.taskName,
    })

    Task.create(newTask)
    .then((data)=>{
        console.log("Document",data);
        sendResponse(200,"Task created",data,req,res);
    })
    .catch((err)=>{
        console.log(err);
        sendErrorMessage(new AppError(400,"Unsuccessful","Tasks not created"),req,res);
    })
}

const getTaskById = (req,res,next)=>{
    Task.find({taskId: req.params.taskId})
    .then((data)=>{
        console.log(data);
        sendResponse(200,"Task fetched",data,req,res);
    })
    .catch((err)=>{
        console.log(err);
        sendErrorMessage(new AppError(400,"Unsuccessful","Task not fetched"),req,res);
    })
}

const updateTask = (req,res,next) =>{
    Task.findOneAndUpdate(
        {taskId: req.params.taskId},
        {status: "Completed"},
        {useFindAndModify: false, new: true}
    )
    .then((data)=>{
        console.log("Data", data);
        sendResponse(200,"Task updated",data,req,res);
    })
    .catch((err)=>{
        console.log(err);
        sendErrorMessage(new AppError(400,"Unsuccessful","Task not updated"),req,res);
    })
}

const deleteTaskById = (req,res,next) =>{
    Task.findOneAndDelete({taskId: req.params.taskId})
    .then((data)=>{
        console.log(data);
        sendResponse(200,"Task deleted",data,req,res);
    })
    .catch((err)=>{
        console.log(err);
        sendErrorMessage(new AppError(400,"Unsuccessful","Task not deleted"),req,res);
    })
}

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.getTaskById = getTaskById;
module.exports.updateTask = updateTask;
module.exports.deleteTaskById = deleteTaskById;