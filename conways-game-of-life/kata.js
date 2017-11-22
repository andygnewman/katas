const getGeneration = (cells, generations) => {

  let lastGen = 0;

  const growEnv = env => {
    const newEnv = env.map(row => [0].concat(row, [0])); // add extra columns
    newEnv.push(Array.from({length: newEnv[0].length}, () => 0)); // add initial row
    newEnv.unshift(Array.from({length: newEnv[0].length}, () => 0)); // add final row
    return newEnv;
  };

  const trimEnv = function recursion(env) {
    let newEnv = JSON.parse(JSON.stringify(env)); // deep copy for comparison
    const sum = (array) => array.reduce((a, b) => a + b);
    if (sum(newEnv[0]) === 0) newEnv.shift();
    if (sum(newEnv[newEnv.length - 1]) === 0) newEnv.pop();
    if (sum(newEnv.map(row => row[0])) === 0) newEnv.forEach(row => row.shift());
    if (sum(newEnv.map(row => row[row.length - 1])) === 0) newEnv.forEach(row => row.pop());
    if (JSON.stringify(newEnv) === JSON.stringify(env)) {
      return newEnv;
    }
    return recursion(newEnv);
  }

  const getNeighbourhood = (x, y, env) => {
    const hood = [];
    for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, env.length); i++) {
      for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, env[0].length); j++) {
        if (i === x && j === y) {
          hood.push(0)
        } else {
          hood.push(env[i][j]);
        }
      }
    }
    return hood.reduce((a, b) => a + b);
  };

  const conway = (cell, hood) => {
    if (cell === 1) {
      return (hood < 2 || hood > 3) ? 0 : cell;
    }
    return hood === 3 ? 1 : cell;
  };

  let currentEnv = cells;

  while (lastGen < generations) {
    const grownEnv = growEnv(currentEnv);
    const nextGenEnv = grownEnv.map((row, rowIndex) => {
      return row.map((cell, colIndex) => {
        return conway(cell, getNeighbourhood(rowIndex, colIndex, grownEnv));
      });
    });
    currentEnv = trimEnv(nextGenEnv);
    lastGen ++;
  }

  return currentEnv;
}

const start = [[1,0,0],
     [0,1,1],
     [1,1,0]];

console.log(getGeneration(start, 3));
