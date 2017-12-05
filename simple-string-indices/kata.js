// const solve = (str, index) => {
//   const toCheck = Array.from(str).splice(index);
//   if (toCheck.shift() !== '(') return -1;
//   let resultIndex;
//   toCheck.reduce((acc, char, i) => {
//     if (char === '(') acc += 1;
//     if (char === ')') acc -= 1;
//     if (!resultIndex && acc === 0) resultIndex = i + 1;
//     return acc;
//   }, 1);
//   return resultIndex + index;
// };

// whilst reduce is neat, it can't be broken out of so is inefficient for this
// where we want to break as soon as we get a result, so a for loop better

const solve = (str, index) => {
  if (str[index] !== '(') return -1;
  let count = 1;
  for (let i = index + 1; i < str.length; i ++) {
    if (str[i] === '(') count += 1;
    if (str[i] === ')') count -= 1;
    if (count === 0) return i;
  }
};

console.log(solve("((1)23(45))(aB)",0),' should return 10');
console.log(solve("((1)23(45))(aB)",1),' should return 3');
console.log(solve("((1)23(45))(aB)",2),' should return -1');
console.log(solve("((1)23(45))(aB)",6), ' should return 9');
console.log(solve("((1)23(45))(aB)",11),' should return 14');
console.log(solve("(g(At)IO(f)(tM(qk)YF(n)Nr(E)))",11),' should return 28');
console.log(solve("(g(At)IO(f)(tM(qk)YF(n)Nr(E)))",0),' should return 29');
console.log(solve("(>_(va)`?(h)C(as)(x(hD)P|(fg)))",19),' should return 22');
