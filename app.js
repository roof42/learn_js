import * as PaymentService from "./models/paymentService.js";
import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json("Hello World!!!");
});

app.get("/:email", (req, res) => {
  let email = req.params.email;
  let individual = PaymentService.getIndividualDetail(email);
  res.send(individual);
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});
