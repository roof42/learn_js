import mongoose from "mongoose";

var Schema = mongoose.Schema;

const kittySchema = new Schema({
  name: String,
});
export const Kitten = mongoose.model("Kitten", kittySchema);

const individualDetail = new Schema({
  email: String,
  name: String,
  bankAccount: String,
  dailyReate: Number,
  tel: String,
  submitedDate: { type: Date, default: Date.now },
});
export const IndividualDetail = mongoose.model(
  "IndividualDetail",
  individualDetail
);
