const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");
const now = moment();
const date = now.format("L");

const postSchema = new Schema({
  date: {
    type: String,
    required: true,
    default: date,
  },
  list: {
    type: Array,
    required: true,
  },
  praeposter: {
    ref: "praeposters",
    type: Schema.Types.ObjectId,
  },
  groupName: {
    // ref: "praeposters",
    type: String,
    required: true,
  },
  createdAt: { type: Date, expires: 18144000, default: Date.now },
});

module.exports = mongoose.model("posts", postSchema);
