import { individuals, workingRecords } from "./data";

const getIndividualDetail = (emailAddress) => {
  let individualDetail = individuals[emailAddress];
  return individualDetail;
};
const getIndividualWorkingRecord = (emailAddress) => {
  let workingRecord = workingRecords[emailAddress];
  return workingRecord;
};

module.exports = { getIndividualDetail, getIndividualWorkingRecord };
