const str1 = 'katas';
const str2 = 'steak';

const scramble = (str1, str2) => {
  const remainder = str2.split('').reduce((str, char) => str.replace(char, ''), str1);
  return str1.length - remainder.length === str2.length;
};

console.log(scramble(str1, str2));
