
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix)) {
    return [];
  };
  let sortedMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i !==0 && i % 2 !== 0) {
      sortedMatrix = sortedMatrix.concat(matrix[i].reverse());
    } else {
      sortedMatrix = sortedMatrix.concat(matrix[i]);
    };
  };
  return (sortedMatrix);
}
