const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let result = [];

  if (str.length == 0) {
    return '';
  }
  let count = 1;
  let prev = str[0]
  for (let i = 1; i < str.length; i++) {
    if (i === (str.length - 1)) {
      if (str[i] === prev) {
        count++;
        prev = str[i];
        result.push([count, prev]);
        break
      } else {
        result.push([count, prev]);
        count = 1;
        prev = str[i]
        result.push([count, prev]);
        break
      }
    }
    if (str[i] === prev) {
      count++;
      prev = str[i];
    } else {
      result.push([count, prev]);
      count = 1;
      prev = str[i]
    }
  }
  
  for(let i = 0; i < result.length; i++){

    if(result[i][0] == 1) {
      result[i][0] = '';
    }
  }
  const newArr = result.map(el => el.join(''))
  return newArr.join('');
}

module.exports = {
  encodeLine
};
