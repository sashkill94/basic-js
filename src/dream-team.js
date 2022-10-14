const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length == 0){
    return false;
  }
  const realMembers = members.filter(el => typeof (el) == 'string').map(el => {
      let temp = el.trim();
      return temp[0].toUpperCase();
  }).sort().reduce((acc, el) => acc += el);
  if (realMembers.length < 1) {
      return false;
  }
  return realMembers;
}

module.exports = {
  createDreamTeam
};
