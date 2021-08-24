import { createPaymentRecord } from "../../models/individual.model";

test("roof should get the right salary", () => {
  let paymentRecord = createPaymentRecord("roof@odds.team");
  expect(paymentRecord.totalIncome).toBe(56260);
});
