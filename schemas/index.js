import mongoose from "mongoose";
import IndividualDetail from "./define.js";

const connectDB = () => {
  console.log("Connecting to Database");
  return mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};
const models = { IndividualDetail };

export { connectDB };
export default models;
