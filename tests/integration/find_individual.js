import models, { connectDB, closeConnection } from "../../schemas/index.js";
import dotenv from "dotenv";

dotenv.config();

try {
  await connectDB();
  let individuals = await models.IndividualDetail.find();
  console.log(`Result ${individuals}`);
} catch (error) {
  console.log(`Error ${err}`);
} finally {
  await closeConnection();
  console.log("Connection closed");
}
