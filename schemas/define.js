import mongoose from "mongoose";

const individualDetail = new mongoose.Schema({
  email: String,
  name: String,
  bankAccount: String,
  dailyReate: Number,
  tel: String,
  submitedDate: { type: Date, default: Date.now },
});

const IndividualDetail = mongoose.model("IndividualDetail", individualDetail);

export default IndividualDetail;
