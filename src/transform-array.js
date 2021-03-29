const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(typeof arr != "object" ) {
    throw Error();
  }
  if(arr.length != 0){
    let commands = [
      "--discard-prev",
      "--double-prev",
      "--double-next",
      "--discard-next"
    ];
    let res = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case commands[0]: // --discard-prev
      if (arr[i - 2] != '--discard-next') {
        res.pop();
      }
      continue;           
      case commands[1]: //--double-prev
      if (arr[i - 1] != undefined && arr[i - 2] != '--discard-next') {
        res.push(res[res.length - 1]);
      }
      continue;
      case commands[2]: // --double-next
      if (arr[i + 1] != undefined) {
        res.push(arr[i + 1]);
      }
      continue;
      case commands[3]: // --discard-next
        i++;
        continue;
    }
    res.push(arr[i]);
  }
  return res;
}else{
  return arr;
}
};