const determinant = (m) => {

  const getMinorMatrixDeterminant = (mm) => {
    return ((mm[0][0] * mm[1][1]) - (mm[0][1] * mm[1][0]));
  };

  const trimMatrix = (m, index) => {
    const trimmedRow = m.slice();
    trimmedRow.splice(0, 1)
    const trimmedColumn = trimmedRow.map(arr => {
      const returnArray = arr.slice();
      returnArray.splice(index, 1);
      return returnArray;
    });
    return trimmedColumn;
};

  if (m.length === 1) return m[0][0];
  if (m.length === 2) return getMinorMatrixDeterminant(m);
  if (m.length >= 3) {
    let subtract = false;
    return m[0].reduce((acc, curr, index) => {
      const trimmedMatrix = trimMatrix(m, index);
      const minorMatrixDeterminant = trimmedMatrix.length > 2 ? determinant(trimmedMatrix) : getMinorMatrixDeterminant(trimmedMatrix);
      const total = curr * minorMatrixDeterminant;
      const newAcc = subtract ? acc - total : acc + total;
      subtract = !subtract;
      return newAcc;
    }, 0);
  }
};

const m1 = [[1]];
const m2 = [ [1, 3], [2,5]];
const m3 = [ [2,5,3], [1,-2,-1], [1, 3, 4]];

console.log(`${determinant(m1)} should equal 1`);
console.log(`${determinant(m2)} should equal -1`);
console.log(`${determinant(m3)} should equal -20`);
