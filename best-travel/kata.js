const chooseBestSum = (maxDistance, towns, distances) => {
  const combinations = [];

  // generate combinations
  const getCombinations = (array, size, start, subArray) => {
    if (subArray.length >= size) {
      combinations.push(subArray)
    } else {
      for (let i = start; i < array.length; i ++) {
        // increment start point and add current index into subArray
        getCombinations(array, size, i + 1, subArray.concat(array[i]));
      }
    }
  };

  getCombinations(distances, towns, 0, []);

  const totalDistances = combinations.map(array => array.reduce((a, b) => a + b)).sort((a, b) => a-b);

  if (totalDistances.length) {
    // return null of no distance is below the maximum
    if (maxDistance < totalDistances[0]) return null;
    // otherwise return the distance below the one above the max, or the highest
    return totalDistances[totalDistances.findIndex(dist => dist > maxDistance) - 1] || totalDistances.pop();
  }
  return null;
};

const a = [50, 55, 56, 57, 58];
console.log(chooseBestSum(163, 3, a), ' should return 163');
const b = [50]
console.log(chooseBestSum(163, 3, b), ' should return null');
const c = [91, 74, 73, 85, 73, 81, 87]
console.log(chooseBestSum(230, 3, c), ' should return 228');
// all combinations are less than maxDistance
const d = [ 91, 74, 73, 85, 73, 81, 87 ];
console.log(chooseBestSum(331, 2, d), ' should return 178');
// no combinations are greater than maxDistance
const e = [ 91, 74, 73, 85, 73, 81, 87 ];
console.log(chooseBestSum(331, 5, e), 'should return null')
// large number of combinations
const f = [ 100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89 ];
console.log(chooseBestSum(430, 5, f), 'should return 430');
