const express = require("express");

const connectDB = require("./config/connectDb");

const app = express();
const user = require("./routes/user");
const post = require("./routes/post");
app.use(express.json());
connectDB();
const PORT = process.env.PORT || 5000;
app.use("/", user, post);
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Your server is running on port ${PORT}`)
);
