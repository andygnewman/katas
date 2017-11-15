const str = 'the_stealth_warrior'

function toCamelCase(str){
  const words = str.split(/[-_]/);
  words.forEach((word, index) => {
    if (index === 0) return;
    words[index] = word.replace(word.charAt(), word.charAt().toUpperCase());
  });
  return words.join('');
}

console.log(toCamelCase(str));
