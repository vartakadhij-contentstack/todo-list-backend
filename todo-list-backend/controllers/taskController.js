const Task = require("../models/taskSchema");
const sendErrorMessage = require("../helpers/sendError");
const AppError = require("../helpers/appErrorClass");
const sendResponse = require("../helpers/sendResponse");

const verifyPostRequest = (req,res,next)=>{
    const requiredProperties = ["taskName"];
    let result = requiredProperties.every((key)=>{
        return req.body[key];
    })

    if(!result){
        sendErrorMessage(new AppError(400,"Unsuccessful","Request Body is not valid"),
        req,
        res
        )
    }
    else{
        next();
    }
}

const getAllTasks = async (req,res,next)=>{
    Task.find().then((allTasks)=>{
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
        if(!data[0]){
            sendErrorMessage(new AppError(400,"Unsuccessful","Task not found"),req,res);
        }
        else{
              console.log(data);
              sendResponse(200,"Task fetched",data,req,res);
        }
    })
    .catch((err)=>{
        console.log(err);
        sendErrorMessage(new AppError(400,"Unsuccessful","Task not fetched"),req,res);
    })
}

const updateTaskStatus = (req,res,next) =>{
    Task.findOneAndUpdate(
        {taskId: req.params.taskId},
        {status: "Completed"},
        {new: true}
    )
    .then((data)=>{
        if(!data){
            sendErrorMessage(new AppError(400,"Unsuccessful","Task not found"),req,res);
        }
        else{
              console.log("Data", data);
              sendResponse(200,"Task status updated",data,req,res);
        }  
    })
    .catch((err)=>{
        console.log(err);
        sendErrorMessage(new AppError(400,"Unsuccessful","Task not updated"),req,res);
    })
}

const deleteTaskById = (req,res,next) =>{
    Task.findOneAndDelete({taskId: req.params.taskId})
    .then((data)=>{
        if(!data){
            sendErrorMessage(new AppError(400,"Unsuccessful","Task not found"),req,res);
        }
        else{
              console.log(data);
              sendResponse(200,"Task deleted",data,req,res);
        }  
    })
    .catch((err)=>{
        console.log(err);
        sendErrorMessage(new AppError(400,"Unsuccessful","Task not deleted"),req,res);
    })
}

module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.getTaskById = getTaskById;
module.exports.updateTaskStatus = updateTaskStatus;
module.exports.deleteTaskById = deleteTaskById;
module.exports.verifyPostRequest = verifyPostRequest;