const express = require("express");
const { 
    getAllTasks, 
    createTask, 
    verifyPostRequest, 
    getTaskById, 
    updateTaskStatus, 
    deleteTaskById } = require("../controllers/taskController");

const router = express.Router();

router.route("/tasks").get(getAllTasks).post(verifyPostRequest,createTask);
router.route("/tasks/:taskId").get(getTaskById).patch(updateTaskStatus).delete(deleteTaskById);

module.exports = router;