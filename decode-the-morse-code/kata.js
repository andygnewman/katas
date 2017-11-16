const decodeMorse = (morseCode) => {
  return morseCode.trim().replace(/\s{3}/g, ' s ').split(' ').map(char => {
    return char !== 's' ? MORSE_CODE[char] : ' ';
  }).join('');
}
