const bits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';

// Not particularly happy with this solution
// Key issue is how to differentiate '111' with no other data
// Tests assume it is a dash, whereas it could be a dot with a timecode of three
// With no '0's or other '1's it is hard to tell
const decodeBits = (bits) => {
  bits = bits.replace(/^0+|0+$/g, ''); // trim leading & following 0's
  const timeFrom1 = bits.match(/1+/g) && bits.match(/1+/g).sort().shift().length; // shortest group of 1's
  const timeFrom0 = bits.match(/0+/g) && bits.match(/0+/g).sort().shift().length; // shortest group of 0's
  const time = Math.min(timeFrom1, timeFrom0 || timeFrom1); // shortest overall - assume this is the time
  const timeNormalized = bits.split('').map((bit, index) => (index + 1) % time === 0 ? bit : '').join('');
  return timeNormalized
    .replace(/1{3}/g, '-') // convert 3 1's to dashes
    .replace(/1{1}/g, '.') // convert 1 1 to dots
    .replace(/0{7}/g, '   ') // convert 7 0's to 3 spaces between words
    .replace(/0{3}/g, ' ') // convert 3 0's to 1 spaces between characters
    .replace(/0{1}/g, ''); // remove any remaining 0's that are between dots & dashes
};

const decodeMorse = (morseCode) => {
  return morseCode.trim().replace(/\s{3}/g, ' s ').split(' ').map(char => {
    return char !== 's' ? MORSE_CODE[char] : ' ';
  }).join('');
};

console.log(decodeMorse(decodeBits(bits)));
