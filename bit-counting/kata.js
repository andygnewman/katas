const num = 10;

const countBits = (num) => num.toString(2).replace(/0/g,'').length;

console.log(countBits(num));
