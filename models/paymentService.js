import * as Database from "./data.js";
import models from "../schemas/index.js";
export const getIndividualDetail = (emailAddress) => {
  let individualDetail = Database.individuals[emailAddress];
  return individualDetail;
};

export const getIndividualWorkingRecord = (emailAddress) => {
  let workingRecord = Database.workingRecords[emailAddress];
  return workingRecord;
};

export const getAllIndividualDetail = async () => {
  let result = await models.IndividualDetail.find({});
  return result;
};
