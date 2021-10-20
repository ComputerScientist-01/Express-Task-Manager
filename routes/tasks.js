const express = require("express");
const router = express.Router();
//import controllers here
const {
	getAllTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks);

module.exports = router;
