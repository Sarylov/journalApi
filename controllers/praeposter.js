// M = model
const MPosts = require("../models/Posts");
const MPraeposter = require("../models/Praeposter");

module.exports.getPostDay = async (req, res) => {
  try {
    const { day, mount, year, id } = req.params;
    const date = `${day}/${mount}/${year}`;
    const post = await MPosts.findOne({ praeposter: id, date: date });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getOnePost = async (req, res) => {
  try {
    const { idPost, id } = req.params;
    const post = await MPosts.findOne({ praeposter: id, _id: idPost });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getPraeposter = async (req, res) => {
  try {
    const { id } = req.params;
    const praeposter = await MPraeposter.findOne({ _id: id });
    res.status(200).json(praeposter);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await MPosts.find({ praeposter: id });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

module.exports.addPost = async (req, res) => {
  try {
    const { id } = req.params;
    const praeposter = await MPraeposter.findOne({ _id: id });
    const { list, date } = req.body;
    const post = new MPosts({
      date: date,
      list: list,
      praeposter: id,
      groupName: praeposter.group.name,
    });
    await post.save();
    res.status(201).json({
      message: "пост успешно создан",
      post: post,
    });
  } catch (error) {
    console.log(error);
    res.status(203).json({
      message: "произошла ошибка",
    });
  }
};

module.exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const date = req.body.date;
    const newList = req.body.list;
    const post = await MPosts.findOne({ praeposter: id, date: date });

    post.list = newList;
    await post.save();
    res.status(200).json({
      message: "данные обновлены",
      post: post,
    });
  } catch (error) {
    console.log(error);
    res.status(203).json({
      message: "произошла ошибка",
    });
  }
};
