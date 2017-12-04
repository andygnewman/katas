const parseMolecule = (molecule) => {

  const flatten = (a) => {
    return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
  };

  const resultObject = {};

  const squareBracketSplit = molecule.split(/[\[|\]]/g);

  const squareBracket = squareBracketSplit.map((val, index) => {
    return squareBracketSplit[index - (parseInt(val) ? 1 : 0)];
  }).join('');

  const parenthesisSplit = squareBracket.split(/[\(|\)]/g).map(val => {
    if (parseInt(val.charAt()) && val.length > 1) {
      return [val.charAt(), val.replace(val.charAt(), '')];
    } else return val;
  })

  const flattened = flatten(parenthesisSplit);

  const parenthesis = flattened.map((val, index) => {
    return flattened[index - (parseInt(val) ? 1 : 0)];
  }).join('');

  parenthesis.split('').reduce((acc, curr) => {
    if (!parseInt(curr)) {
      if (curr === curr.toLowerCase()) {
        if (!resultObject[acc + curr]) resultObject[acc + curr] = 1;
        else resultObject[acc + curr] ++;
        delete resultObject[acc];
      } else {
        if (!resultObject[curr]) resultObject[curr] = 1;
        else resultObject[curr] ++;
      }
    } else {
      resultObject[acc] += (parseInt(curr) - 1);
    }
    return curr;
  }, '');

  return resultObject;
};




const water = 'H2O'; // Solved
console.log(parseMolecule(water), ' should return {H: 2, O: 1}');

const magnesiumHydroxide = 'Mg(OH)2'; // Solved
console.log(parseMolecule(magnesiumHydroxide), ' should return {Mg: 1, O: 2, H: 2}');

const fremySalt = 'K4[ON(SO3)2]2';
console.log(parseMolecule(fremySalt), ' should return {K: 4, O: 14, N: 2, S: 4}');
