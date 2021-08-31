import models, { connectDB } from "../../schemas/index.js";
import dotenv from "dotenv";

dotenv.config();

connectDB()
  .then(() => {
    models.IndividualDetail.find()
      .then((individuals) => {
        console.log(individuals);
      })
      .catch((err) => {
        console.log("Error" + err);
      })
      .finally((info) => console.log("All done"));
  })
  .catch(() => {});
