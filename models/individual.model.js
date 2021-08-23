import PaymentService from "./paymentService";

const createPaymentRecord = (emailAddress) => {
  let individualDetail = PaymentService.getIndividualDetail(emailAddress);
  let workingRecord = PaymentService.getIndividualWorkingRecord(emailAddress);
  let totalPayment = totalPaymentForIndividual(individualDetail, workingRecord);
  return {
    email: individualDetail.email,
    name: individualDetail.name,
    tel: individualDetail.tel,
    totalIncome: totalPayment,
    submitedDate: workingRecord.submitedDate,
  };
};

const totalPaymentForIndividual = (individualDetail, workingRecord) => {
  let totalIncome = workingRecord.workingDays * individualDetail.dailyRate;
  let witholdingTax = totalIncome * 0.03;
  return totalIncome - witholdingTax;
};

module.exports = createPaymentRecord;
