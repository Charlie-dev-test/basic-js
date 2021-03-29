const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 0;
    let currentRes = 0;

    if (Array.isArray(arr)) {
      res = 1;
      currentRes = 1;
      for (let i = 0; i < arr.length; i++) {
        currentRes = currentRes + this.calculateDepth(arr[i]);
        if(currentRes > res){
          res = currentRes;
        }
        currentRes = 1;
      }
    }
    return res;
  }
};