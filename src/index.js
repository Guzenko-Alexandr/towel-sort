
module.exports = function towelSort(matrix = []) {
  if (!matrix.length) {
    return matrix;
  }
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 != 0) {
      matrix[i].reverse()
    }
    res = res.concat(matrix[i]);
  }
  return res;
}
