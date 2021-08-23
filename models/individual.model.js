const individuals = {
  "punyawee_w@odds.team": {
    email: "punyawee_w@odds.team",
    name: "Punyavee",
    tel: "000000000",
    dailyRate: 8000,
  },
  "roof@odds.team": {
    email: "roof@odds.team",
    name: "Twin Panitsombat",
    tel: "000000000",
    dailyRate: 2000,
  },
};

const workingRecords = {
  "punyawee_w@odds.team": {
    workingDays: 20,
    submitedDate: new Date(1995, 11, 17, 3, 24, 0),
  },
  "roof@odds.team": {
    workingDays: 29,
    submitedDate: new Date(1995, 11, 17, 3, 24, 0),
  },
};

const getIndividualDetail = (emailAddress) => {
  let individualDetail = individuals[emailAddress];
  return individualDetail;
};
const getIndividualWorkingRecord = (emailAddress) => {
  let workingRecord = workingRecords[emailAddress];
  return workingRecord;
};

const monthlyCalculation = (individual, workingRecord) => {
  let total = workingRecord.workingDays * individual.dailyRate * 0.97;
  return total;
};

const process = () => {
  let individual = getIndividualDetail("roof@odds.team");
  let workingRecord = getIndividualWorkingRecord("roof@odds.team");
  return {
    email: individual.email,
    name: individual.name,
    tel: individual.tel,
    totalIncome: monthlyCalculation(individual, workingRecord),
    submitedDate: workingRecord.submitedDate,
  };
};

module.exports = process;
