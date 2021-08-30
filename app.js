import express from "express";
import * as PaymentService from "./models/paymentService.js";
import { connectDB } from "./schemas/index.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.APP_PORT;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/health-check", (req, res) => {
  res.send("OK");
});

app.post("/individual-informations", (req, res) => {
  let individualDetail = req.body.individualDetail;
  individualDetail.submitedDate = new Date();
  res.send(individualDetail);
});

app.get("/individual-informations", async (req, res) => {
  let individuals = await PaymentService.getAllIndividualDetail();
  res.send(individuals);
});

app.get("/individual-informations/:email", (req, res) => {
  let email = req.params.email;
  let individual = PaymentService.getIndividualDetail(email);
  res.send(individual);
});

app.post("/working-records", (req, res) => {
  let workingRecord = req.body.workingRecord;
  workingRecord.submitedDate = new Date();
  res.send(workingRecord);
});

app.get("/working-records/:email", (req, res) => {
  let email = req.params.email;
  let workingRecord = PaymentService.getIndividualWorkingRecord(email);
  res.send(workingRecord);
});

connectDB()
  .then(async () => {
    app.listen(port, () => {
      console.log("Server is running on " + port);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });
