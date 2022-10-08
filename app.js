require("dotenv").config();
const express = require("express");
const connectDB = require("./DB");
const router = require("./routes/User");

const app = express();
const port = process.env.PORT;
app.use("/", router);
app.all("*", (req, res) => {
  res.send(`<h1>Oops!</h1>
    <p>Seems that this page doesn't exist</p>
    <a href="/users">Get Users</a>
    `);
});
connectDB();
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
