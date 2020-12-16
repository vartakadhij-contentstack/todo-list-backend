const express = require("express");
const { 
    getAllTasks, 
    createTask, 
    // verifyPostRequest, 
    getTaskById, 
    updateTask, 
    deleteTaskById } = require("../controllers/taskController");

const router = express.Router();

router.route("/tasks").get(getAllTasks).post(createTask);
router.route("/tasks/:taskId").get(getTaskById).patch(updateTask).delete(deleteTaskById);

module.exports = router;