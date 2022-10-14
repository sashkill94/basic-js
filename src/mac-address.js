const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  const arr = n.split('-');
  if(arr.length != 6){
    return false;
  }
  const newArr = arr.map(el => el.split(''));
  const regex = /\d|[A-F]/;
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i].length != 2){
      return false;
    }
    if(!regex.test(newArr[i][0])) {
      return false;
    }  
    if(!regex.test(newArr[i][1])) {
      return false;
    }  
  };
  return true;
}
module.exports = {
  isMAC48Address
};
