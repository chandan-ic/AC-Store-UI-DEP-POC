export const setExpiryTime = (seconds) => {
  var dateObj = new Date();
  var val = dateObj.getTime();
  var days = seconds * 1000;
  val = val + days;
  dateObj = new Date(val);
  return dateObj.toISOString();
};

export const numberToINR = (number, digit) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: digit,
  }).format(number);
};
