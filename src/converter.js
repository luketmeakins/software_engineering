export function convertToGBP(amount, rate) {
  if (amount <= 0 || rate <= 0) {
    throw new Error("Invalid input");
  }
  return amount / rate;
}
export function convertFromGBP(amount, rate) {
  return amount / rate;
}
export function formatRateDate(dateString) {
  return new Date(dateString).toDateString();
}


