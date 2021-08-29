import express from "express";
import * as PaymentService from "./models/paymentService.js";
import mongoose from "mongoose";
import * as Model from "./schemas/define.js";
import models, { connectDB } from "./schemas/index.js";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/health-check", (req, res) => {
  models.IndividualDetail.find()
    .then((individuals) => {
      console.log(individuals);
      res.send(individuals);
    })
    .catch((err) => {
      console.log("Error" + err);
    })
    .finally((info) => console.log("All done"));
});

app.post("/individual-informations", (req, res) => {
  let individualDetail = req.body.individualDetail;
  console.log(individualDetail);
  individualDetail.submitedDate = new Date();
  res.send(individualDetail);
});

app.get("/individual-informations/:email", (req, res) => {
  let email = req.params.email;
  let individual = PaymentService.getIndividualDetail(email);
  res.send(individual);
});

app.post("/working-records", (req, res) => {
  let workingRecord = req.body.workingRecord;
  workingRecord.submitedDate = new Date();
  console.log(workingRecord);
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
