const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const praeposterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    // required: true,
    default: "не указан",
  },
  group: {
    type: Object,
    name: {
      type: String,
      unique: true,
      required: true,
    },
    list: {
      type: Array,
      default: [],
    },
  },
  faculty: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("praeposters", praeposterSchema);
