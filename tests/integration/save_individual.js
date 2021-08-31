import models, { connectDB } from "../../schemas/index.js";
import dotenv from "dotenv";

dotenv.config();
const roof = new models.IndividualDetail({
  email: "namon@odds.team",
  name: "Namon Panitsombat",
  bankAccount: "123123123",
  dailyRate: 2000,
  tel: "0933233293",
});

connectDB()
  .then(async () => {
    roof.save(() => {
      console.log("Record saved");
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
