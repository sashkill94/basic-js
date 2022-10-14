const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const halfTime = 5730;
  const log = 0.693;
  const speed = 15;
  if (typeof (sampleActivity) != 'string') {
    return false;
  }
  const date = parseFloat(sampleActivity);
  if (typeof (date) != 'number' || date > 15 || date <= 0 || isNaN(date)) {
    return false;
  }
  const result = Math.log(speed / sampleActivity) / (log / halfTime);
  return Math.ceil(result);

}

module.exports = {
  dateSample
};
