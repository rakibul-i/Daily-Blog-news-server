const mongoose = require("mongoose");
const { Schema } = mongoose;

const commnentSchema = new Schema({
  blogId: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Comment = mongoose.model("Comment", commnentSchema);

module.exports = { Comment };
