import mongoose from "mongoose";
import IndividualDetail from "../../schemas/define.js";
import dotenv from "dotenv";

dotenv.config();
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DATABASE;

mongoose
  .connect(`mongodb://${host}:${port}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDB connected!!");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
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
