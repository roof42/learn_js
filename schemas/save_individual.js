import mongoose from "mongoose";
import IndividualDetail from "./define.js";

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const roof = new IndividualDetail({
  email: "roof@odds.team",
  name: "Roof Panitsombat",
  bankAccount: "123123123",
  dailyRate: 2000,
  tel: "0933233293",
});

roof.save(function (err, fluffy) {
  if (err) return console.error(err);
});

console.log(roof.name); // 'Silence'
