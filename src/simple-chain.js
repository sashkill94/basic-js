const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  chain: [],
  getLength: function () {
    return this.chain.length;
  },
  addLink: function (value) {
    if (value == null) {
      this.chain.push('null')
    } else {
      this.chain.push(value);
    }
    return this;
  },
  removeLink: function (position) {
    if (!Number.isInteger(position) || position > this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain: function () {
    this.chain.reverse();
    return this;
  },
  finishChain: function () {
    const result = '( ' + this.chain.join(' )~~( ') + ' )';
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
