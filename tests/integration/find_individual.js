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

IndividualDetail.find()
  .then((individuals) => {
    console.log(individuals);
  })
  .catch((err) => {
    console.log("Error" + err);
  })
  .finally((info) => console.log("All done"));
