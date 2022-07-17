// M = model
const MPraeposter = require("../models/Praeposter");

module.exports.addPraeposter = async (req, res) => {
  try {
    const data = req.body;
    const condidate = await MPraeposter.findOne({
      "group.name": data.group.name,
    });
    if (condidate == null) {
      const Praeposter = new MPraeposter({
        name: data.name,
        phone: data.phone,
        group: data.group,
        faculty: data.faculty,
      });
      await Praeposter.save();
      res.status(201).json(Praeposter);
    } else res.status(203).json({ message: "error" });
  } catch (error) {
    console.log(error);
  }
};

module.exports.updatePraeposter = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const praeposter = await MPraeposter.findOne({ _id: id });

    praeposter.name = data.name;
    praeposter.phone = data.phone || "не указан";
    praeposter.group = data.group;
    praeposter.faculty = data.faculty;

    await praeposter.save();
    res.status(200).json({
      message: "данные обновленны",
      praeposter: praeposter,
    });
  } catch (error) {
    console.log(error);
    res.status(203).json({
      message: "произошла ошибка",
    });
  }
};
