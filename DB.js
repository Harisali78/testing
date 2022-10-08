require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log(`DB CONNECTED SUCCESSFULLY`);
    })
    .catch((err) => {
      console.log(`Error Occured: ${err}`);
    });
};

module.exports = connectDB;
