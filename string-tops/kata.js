const tops = (msg) => {
  if (!msg.length) return '';
  let count = 0;
  let i = 0;
  let result = [];
  while (count < msg.length) {
    i ++;
    count +=i;
    if (i % 2 !== 0) result.push(msg[count]);
  }
  return result.reverse().join('');
};

console.log(tops(''), 'should return \'\'');
console.log(tops('12'), 'should return 2');
console.log(tops('abcdefghijklmnopqrstuvwxyz12345'), 'should return 3pgb');
console.log(tops('abcdefghijklmnopqrstuvwxyz1236789ABCDEFGHIJKLMN'), 'should return M3pgb');
