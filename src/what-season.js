const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) {
    return "Unable to determine the time of year!";
  }
  if(Object.prototype.toString.call(date) !== '[object Date]') throw Error();
  const seasons = [ 
    "winter", 
    "spring", 
    "summer", 
    "autumn",
  ];
  if(date.getMonth() == 11 || date.getMonth() < 2){
    return seasons[0];
  }
  if(date.getMonth() >= 2 && date.getMonth() <= 4){
    return seasons[1];
  }
  if(5 <= date.getMonth() && date.getMonth() <= 7){
    return seasons[2];
  }
  if(8 <= date.getMonth() && date.getMonth() < 11){
    return seasons[3];
  }
};
