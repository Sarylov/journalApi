// M = model
const MPosts = require("../models/Posts");
const MPraeposter = require("../models/Praeposter");

module.exports.getPosts = async (req, res) => {
  try {
    const { groupName, date } = req.query;
    let posts;
    if (groupName == "all") posts = await MPosts.find({ date: date });
    else posts = await MPosts.find({ date: date, groupName: groupName });
    res.status(200).json(posts);
  } catch (error) {
    res.status(204).json(allPosts);
    console.log(error);
  }
};

module.exports.getPost = async (req, res) => {
  try {
    const { id } = req.params;
    let posts = await MPosts.findOne({ _id: id });
    res.status(200).json(posts);
  } catch (error) {
    res.status(204).json({ message: "error" });
    console.log(error);
  }
};

module.exports.getGroupNames = async (req, res) => {
  try {
    const praeposters = await MPraeposter.find();
    let groupList = [];
    praeposters.forEach((el) => {
      groupList.push(el.group.name);
    });
    res.status(200).json(groupList);
  } catch (error) {
    res.status(204).json({ message: "error" });
    console.log("getGroupNames " + error);
  }
};
