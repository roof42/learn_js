import mongoose from "mongoose";
import IndividualDetail from "./define.js";

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

IndividualDetail.find()
  .then((individuals) => {
    console.log(individuals);
  })
  .catch((err) => {
    console.log("Error" + err);
  })
  .finally((info) => console.log("All done"));
