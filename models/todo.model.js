//const mongoose = require("mongoose");
import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    require: true,
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
