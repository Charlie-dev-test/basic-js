const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(date) {
  if (typeof date !== "string") return false;
  if(isNaN(date)) return false;
  date = Number(date);
  if(date > 15 || date <= 0) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / date) / k;
  return Math.ceil(t);
};
