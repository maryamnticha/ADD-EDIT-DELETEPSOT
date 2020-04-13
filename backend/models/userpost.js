const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  userType: String,
  email: String,
  password: String,
});

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  postType: String,
  body: String,
  date: String,
});
Post = mongoose.model("post", postSchema);
User = mongoose.model("user", userSchema);
module.exports = { User, Post };
