const process = require("../../models/individual.model");

test("roof should get the right salary", () => {
  let processed = process();
  console.log(processed);
  expect(processed.totalIncome).toBe(56260);
});
