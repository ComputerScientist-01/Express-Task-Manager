const mongoose = require("mongoose");

const connectionString = "connection-string";

mongoose
	.connect(connectionString)
	.then(() => console.log("connected to the database ..."))
	.catch(() => console.log("not connected"));
