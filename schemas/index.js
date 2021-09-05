import mongoose from "mongoose";
import IndividualDetail from "./definitions/individualDetail.js";
import dotenv from "dotenv";

dotenv.config();
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const database = process.env.MONGO_DATABASE;

const connectDB = async () => {
  return await mongoose.connect(`mongodb://${host}:${port}/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

const closeConnection = async () => {
  await mongoose.connection.close(() => {
    process.exit();
  });
};

const models = { IndividualDetail };

export { connectDB, closeConnection };
export default models;
