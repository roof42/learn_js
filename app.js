import express from "express";
import * as PaymentService from "./models/paymentService.js";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  res.send(individual);
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});
