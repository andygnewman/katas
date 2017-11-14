const words = 'is2 Thi1s T4est 3a';

const order = (words) => {
  return words.split(' ')
    .sort((a, b) => a.match(/[0-9]/).pop() - b.match(/[0-9]/).pop())
    .join(' ');
};

console.log(order(words));
