const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {

  let arr = domains.map(el => {
    const tempArr = el.split('.').reverse();
    let result = [];
    for (let i = 0; i < tempArr.length; i++) {
      result.push('.' + tempArr.slice(0, i + 1).join('.'));
    }
    return result;
  });
  let map = new Map();
  arr.forEach(element => {
    element.forEach(el => {
      if (map.has(el)) {
        const value = map.get(el);
        map.set(el, value + 1);
      } else {
        map.set(el, 1);
      }
    });
  });

  let myObject = new Object();

  for (let entry of map) {
    myObject[entry[0]] = entry[1];
  }

  return myObject;
}


module.exports = {
  getDNSStats
};
