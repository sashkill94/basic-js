const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (typeof (str) != 'string') {
    str = new String(str)
  }
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const separator = options.separator ? options.separator : '+';
  const addition = typeof(options.addition) != 'undefined'  ? new String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|';


  let aditionArray = new Array(additionRepeatTimes);
  aditionArray.fill(addition);
  const aditionStr = aditionArray.join(additionSeparator);
  let strArray = new Array(repeatTimes);
  strArray.fill(str + aditionStr);
  return strArray.join(separator);


}

module.exports = {
  repeater
};
