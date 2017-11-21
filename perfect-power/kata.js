// Initially wrote this, which passed all the tests, but I was unhappy at the
// time it took to execute - almost 3 secs for all test cases.

const isPP = (n) => {

  const sqrtN = Math.sqrt(n);
  // return if perfect square
  if (Number.isInteger(sqrtN)) return [sqrtN, 2];

  // get all whole numbers between 2 and the sqaure root of n
  const evalNumbers = Array.from({length: Math.floor(sqrtN) - 1}, (val, index) => 2 + index);

  // filter it to just those that can be divisble
  const divisibles = evalNumbers.filter(num => n % num === 0);

  let factor;
  const lowest = divisibles.find(divisible => {
    factor = 0;
    let multiplier = n;

    // keep dividing by the divisble until not evenly divisble and
    // increment the factor each time you do
    while (multiplier % divisible === 0) {
      multiplier = multiplier / divisible;
      factor += 1;
    }

    return Math.pow(divisible, factor) === n ? true : false;
  })

  return lowest ? [lowest, factor] : null;
};

// So wrote did some more digging into the maths behind this and worked out I
// could work from a smaller set of possibilities if I looked at the possible
// powers rather than bases.
// This passed the test cases in 1/8th the time of the upper version.

const isPP2 = (n) => {
  const maxPower = Math.floor(Math.log2(n));
  // get all whole numbers between 2 and the log2 of n
  const powers = Array.from({length: maxPower - 1}, (val, index) => 2 + index);
  const lowestPower = powers.find(power => {
    // given Math.pow(is not completely precise, ie. won't return an integer)
    // it is necessary to round it and then test it scales back up to original number
    const eval = Math.round(Math.pow(n, 1/power));
    return Math.pow(eval, power) === n;
  });
  return lowestPower ? [Math.round(Math.pow(n, 1/lowestPower)), lowestPower] : null;
};

console.log('isPP: ', isPP(12977875));
console.log('isPP2: ', isPP2(12977875));
