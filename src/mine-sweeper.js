const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let mineCard = [];
  for (let i = 0; i < matrix.length; i++) {
    mineCard[i] = new Array(matrix[i].length);
    mineCard[i].fill(0);
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j]) {
        mineCard[i][j] = 1;
      } else {
        const maxI = i < matrix.length - 1 ? i + 1 : -1;
        const maxJ = j < matrix[i].length - 1 ? j + 1 : -1;
        const minI = i > 0 ? i - 1 : -1;
        const minJ = j > 0 ? j - 1 : -1;

        if (minI != -1 && minJ != -1) {
          if (matrix[minI][minJ]) {
            mineCard[i][j] += 1;
          }
        }
        if (minI != -1) {
          if (matrix[minI][j]) {
            mineCard[i][j] += 1;
          }
        }
        if (minI != -1 && maxJ != -1) {
          if (matrix[minI][maxJ]) {
            mineCard[i][j] += 1;
          }
        }
        if (maxJ != -1) {
          if (matrix[i][maxJ]) {
            mineCard[i][j] += 1;
          }
        }
        if (maxI != -1 && maxJ != -1) {
          if (matrix[maxI][maxJ]) {
            mineCard[i][j] += 1;
          }
        }
        if (maxI != -1) {
          if (matrix[maxI][j]) {
            mineCard[i][j] += 1;
          }
        }
        if (maxI != -1 && minJ != -1) {
          if (matrix[maxI][minJ]) {
            mineCard[i][j] += 1;
          }
        }
        if (minJ != -1) {
          if (matrix[i][minJ]) {
            mineCard[i][j] += 1;
          }
        }

      }
    }
  }
  return mineCard;
}

module.exports = {
  minesweeper
};
