const express = require("express");
const router = express.Router();
//import controllers here
const { getAllTasks } = require("../controllers/tasks");

router.route("/").get(getAllTasks);

module.exports = router;
