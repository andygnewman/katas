const arr = [1,2,3,4,3,2,1];

const findEvenIndex = (arr) => {
  return arr.findIndex((val, index) => {
    const sum = (acc, curr) => acc + curr;
    const left = index === 0 ? 0 : arr.slice(0, index).reduce(sum);
    const right = arr.slice((index + 1) - arr.length).reduce(sum);
    return left === right;
  });
}

console.log(findEvenIndex(arr));
