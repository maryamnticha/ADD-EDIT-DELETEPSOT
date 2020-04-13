const { Post } = require("../models/userpost");
const { ObjectID } = require("mongodb");
module.exports = postController = {
  addpost: async (req, res) => {
    const user = ObjectID(req.params.id);
    const { title, body, postType, date } = req.body;
    try {
      const newPost = new Post({
        user,
        title,
        body,
        postType,
        date,
      });
      try {
        const addres = await newPost.save();
        if (addres) return res.status(210).json(addres);
        else return res.status(500).json({ errors: error });
      } catch (error) {
        console.log(error);
        res.status(500).json({ errors: error });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  },

  editpost: async (req, res) => {
    const id = ObjectID(req.params.id);
    const { title, body } = req.body;

    try {
      const searchEdit = await Post.findOneAndUpdate(
        { _id: id },
        { $set: { title, body } }
      );
      if (searchEdit) return res.status(210).json({ searchEdit });
      else return res.status(500).json({ errors: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },

  deletepost: async (req, res) => {
    const id = ObjectID(req.params.id);
    try {
      searchdelete = await Post.findOneAndDelete({ _id: id });
      if (searchdelete)
        return res.status(210).json({ msg: "Post is successfully deleted" });
      else return res.status(500).json({ errors: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },

  getpost: async (req, res) => {
    const user = ObjectID(req.params.id);
    try {
      const searchpostRes = await Post.find({ user });
      if (searchpostRes) return res.json(searchpostRes);
      else return res.status(500).json({ errors: error });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: error });
    }
  },

  getonepost: async (req, res) => {
    const id = ObjectID(req.params.id);
    try {
      const searchonepostRes = await Post.find({ _id: id });
      if (searchonepostRes) return res.json(searchonepostRes);
      else return res.status(500).json({ errors: error });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  },
};
