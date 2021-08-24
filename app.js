import * as PaymentService from "./models/paymentService.js";
import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Hello World!!!");
});

app.get("/:email", (req, res) => {
  let email = req.params.email;
  let individual = PaymentService.getIndividualDetail(email);
  res.send(individual);
});

app.post("/", function (req, res) {
  const individual = req.body.individual;
  console.log(individual.email);
  res.send(req.body);
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});
