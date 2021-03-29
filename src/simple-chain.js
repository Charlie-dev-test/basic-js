const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(value === null){
      value = 'null'
    }
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.arr = [];
      throw new Error('Error!');
    }
    if( position < 1){
      this.arr = [];
      throw new Error('Error!');
    }
    if(this.arr[position] === undefined){
      this.arr = [];
      throw new Error('Error!');
    }
    this.arr.splice(position -1,1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = '';
    if(this.arr.length > 0){
      res = '( ' + this.arr.join(' )~~( ') + ' )';
    }
    this.arr.length = 0;
    return res;
  }
};

module.exports = chainMaker;
