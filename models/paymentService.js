import * as Database from "./data.js";

export const getIndividualDetail = (emailAddress) => {
  let individualDetail = Database.individuals[emailAddress];
  return individualDetail;
};
export const getIndividualWorkingRecord = (emailAddress) => {
  let workingRecord = Database.workingRecords[emailAddress];
  return workingRecord;
};
