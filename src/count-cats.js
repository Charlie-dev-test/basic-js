const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let count = 0;
  for(i=0; i<arr.length; i++){
    for(j=0; j<arr[i].length; j++){
      if(arr[i][j] == '^^'){
        count++
      }
    }
  }
  return count;
  // throw new CustomError('Not implemented');
  // // remove line with error and write your code here
};
