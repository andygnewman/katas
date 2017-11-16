const arr = ['SOUTH', 'NORTH', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'EAST', 'SOUTH', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'WEST', 'EAST'];

function dirReduc(arr){
  const equalizers = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
  };
  return arr.reduce((acc, curr) => {
    if (acc[acc.length - 1] === equalizers[curr]) {
      acc.pop();
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
}

console.log(dirReduc(arr));
