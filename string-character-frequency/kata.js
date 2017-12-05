const solve = (str) => {

  // create a count of each character in the string
  const characterObject = Array.from(str).reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});

  // set monitor for testing validity
  let valuesEqual = false;
  // get array of unique characters
  let characters = Object.keys(characterObject);
  // map through unique characters
  characters.map(key => {
    // if testing already true, don't do anything
    if (valuesEqual) return;
    const values = [];
    // create an array of all the counts, subtracting one from the current character
    characters.map(key2 => values.push(characterObject[key2] - (key2 === key ? 1 : 0)));
    // remove any chracters that are now zero
    var indexOfZero = values.indexOf(0);
    if (indexOfZero > -1) values.splice(indexOfZero, 1);
    // if all values the same then set monitor to true
    valuesEqual = values.every(val => val === values[0]);
  });
  // return the value of the test monitor
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
