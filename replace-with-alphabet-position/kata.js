const text = 'The sunset sets at twelve o\' clock.';

const alphabetPosition = (text) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return text.replace(/[^a-z]/gi, '').split('').map(letter => {
    const index = alphabet.indexOf(letter.toLowerCase());
    if (index > -1) return 1 + index;
  }).join(' ');
};

console.log(alphabetPosition(text));
