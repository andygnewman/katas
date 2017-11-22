const add = (n) => {
  // keep tally on the sum
  let sum = n;
  // define function to return which mutates sum and returns the function
  const sumFunc = (next) => {
    sum += next;
    return sumFunc;
  }
  // add a bespoke valueOf method that returns the value of sum
  sumFunc.valueOf = () => sum;
  return sumFunc;
}
