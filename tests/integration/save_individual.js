import models, { connectDB, closeConnection } from "../../schemas/index.js";
import dotenv from "dotenv";

dotenv.config();

const roof = new models.IndividualDetail({
  email: "roof@odds.team",
  name: "Roof Panitsombat",
  bankAccount: "123123123",
  dailyRate: 2000,
  tel: "0933233293",
});

try {
  await connectDB();
  let savedDoc = await roof.save();
  console.log(`Result ${savedDoc}`);
} catch (error) {
  console.log(`Error ${err}`);
} finally {
  await closeConnection();
  console.log("Connection closed");
}
