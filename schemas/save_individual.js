import mongoose from "mongoose";
import * as Model from "./define.js";
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const kitty = new Model.Kitten({ name: "Louve" });
kitty.save(function (err, fluffy) {
  if (err) return console.error(err);
});

console.log(kitty.name); // 'Silence'
