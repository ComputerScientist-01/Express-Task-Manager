const mongoose = require("mongoose");

const connectionString = "connection-string";

const connectDB = (url) => {
	return mongoose.connect(connectionString);
};

module.exports = connectDB;
