const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = "+";
  if(options.separator != undefined){
    separator = String(options.separator);
  }
  if(options.separator === null){
    separator = 'null';
  }
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let addition = '';
  if(options.addition != undefined){
    addition = String(options.addition);
  }
  if(options.addition === null){
    addition = 'null';
  }
  let res = ''
  for(i=0; i<repeatTimes; i++){
    res = res + str;
    let add = '';
    for(j=0; j<additionRepeatTimes; j++){
      add = add + addition;
      if(j != additionRepeatTimes-1){
        add = add + additionSeparator;
      }
    }
    res = res + add;
    if(i != repeatTimes-1) {
      res = res + separator;
    }
    
  }
  
  return res;
  
};
  