const express = require("express");
const Router = express.Router();
const postController = require("../controlers/postController");

Router.post("/profile/:id/add", postController.addpost);
Router.put("/profile/:id/edit", postController.editpost);
Router.delete("/profile/:id/edit", postController.deletepost);
Router.get("/profile/:id/getAllPost", postController.getpost);
Router.get("/profile/:id/edit", postController.getonepost);

module.exports = Router;
