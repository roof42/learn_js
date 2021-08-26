import mongoose from "mongoose";
import * as Model from "./define.js";
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const silence = new Model.Kitten({ name: "Silence" });
silence.save(function (err, fluffy) {
  if (err) return console.error(err);
});

console.log(silence.name); // 'Silence'
