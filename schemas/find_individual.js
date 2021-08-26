import mongoose from "mongoose";
import * as Model from "./define.js";

mongoose
  .connect("mongodb://localhost:27017/test", {
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
// // db.on("error", console.error.bind(console, "connection error:"));

Model.Kitten.findById("6125d42601fec21244415c4b")
  .then((kitten) => {
    console.log(kitten);
  })
  .catch((err) => {
    console.log("Error");
  })
  .finally((info) => console.log("All done"));
