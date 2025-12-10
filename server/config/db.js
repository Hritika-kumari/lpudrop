const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // Connect to MongoDB using connection string from environment variables
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    // Log database connection errors
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
