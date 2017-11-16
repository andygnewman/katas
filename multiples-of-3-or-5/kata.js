const number = 10;

const solution = (number) => {
  const matches = [];
  for (let i = 1; i < number; i ++) {
    if (i % 3 === 0 || i % 5 === 0) matches.push(i);
  }
  return matches.length ? matches.reduce((acc, curr) => acc + curr) : 0;
};

console.log(solution(number));
