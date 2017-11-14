const n = 123456789;

const descendingOrder = (n) => {
  return parseInt(n.toString().split('').sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(n));
