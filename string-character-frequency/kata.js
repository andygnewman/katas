const solve = (str) => {
  const characterObject = {};
  str.split('').map(char => {
    if (characterObject[char]) {
      characterObject[char] ++;
    } else {
      characterObject[char] = 1;
    }
  });

  let valuesEqual = false;
  Object.keys(characterObject).map(key => {
    if (valuesEqual) return;
    const values = [];
    Object.keys(characterObject).map(key2 => {
      if (key2 === key) values.push(characterObject[key2] - 1);
      else values.push(characterObject[key2]);
    });
    var indexOfZero = values.indexOf(0);
    if (indexOfZero > -1) values.splice(indexOfZero, 1);
    valuesEqual = values.every(val => val === values[0]);
  });
  return valuesEqual;
};


console.log(solve('aaaa'),'should return true');
console.log(solve('abba'),'should return false');
console.log(solve('abbba'),'should return true');
console.log(solve('aabbcc'),'should return false');
console.log(solve('aaaabb'),'should return false');
console.log(solve('aabbccddd'),'should return true');
console.log(solve('aabcde'),'should return true');
console.log(solve('abcde'),'should return true');
console.log(solve('aaabcde'),'should return false');
console.log(solve('abbccc'),'should return false');
