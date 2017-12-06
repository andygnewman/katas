const intermingle = (str1, str2) => {
  const shortest = Math.min(str1.length, str2.length);
  const resultArray = [];
  for (let i = 0; i < shortest; i ++) {
    resultArray.push(str1[i]);
    resultArray.push(str2[i]);
  }
  const extras = str1.slice(shortest) || str2.slice(shortest);
  return resultArray.join('') + extras;
};


const str1 = 'abc';
const str2 = 'def';

console.log(intermingle(str1, str2), 'should equal adbecf');

const str3 = 'hello';
const str4 = 'you';

console.log(intermingle(str3, str4), 'should equal hyeolulo');

const str5 = 'short';
const str6 = 'amuchlongerstring';

console.log(intermingle(str5, str6), 'should equal sahmourcthlongerstring');
