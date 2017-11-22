const pascalsTriangle = (n) => {
  const seed = 1;
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      result.push([seed])
    } else {
      const rowResult = [];
      const prevRow = result[result.length - 1];
      for (let j = 0; j < i; j++) {
        rowResult.push((prevRow[j-1] || 0) + (prevRow[j] || 0));
      }
      result.push(rowResult);
    }
  }
  return result.reduce((a, b) => a.concat(b));
}

console.log(pascalsTriangle(4));
