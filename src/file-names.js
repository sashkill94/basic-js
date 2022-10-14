const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let map = new Map();

  names.forEach(el => map.set(el, 0));

  for (let i = 0; i < names.length; i++) {
    if (map.has(names[i])) {
      if (map.get(names[i]) != 0) {
        const value =  map.get(names[i]);
        map.set(names[i], value + 1);
        names[i] = names[i] + '(' + value + ')';
      } else {
        const value =  map.get(names[i]);
        map.set(names[i], value + 1);
      }
    }
  }

  if (map.size != names.length){
    return renameFiles(names);
  } else {
    return names;
  }

}

module.exports = {
  renameFiles
};
