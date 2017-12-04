const parseMolecule = (molecule) => {

  const splitString = (str) => {
    return str.split('').reduce((acc, curr) => {
      if (parseInt(curr)) {
        if (parseInt(acc.charAt(acc.length - 1))) return acc + curr;
        else return acc + '-' + curr;
      } else {
        if (curr === curr.toLowerCase()) return acc + curr;
        else return acc + '/' + curr;
      }
    });
  };

  const flatten = (a) => {
    return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
  };

  const resultObject = {};

  const squigglyBracketSplit = molecule.split(/[\{|\}]/g);

  const squigglyBracket = squigglyBracketSplit.map((val, index) => {
    if (parseInt(val.charAt())) {
      return squigglyBracketSplit[index - 1].repeat(parseInt(val.charAt()) - 1)
        + val.replace(val.charAt(), '');
    } else return val;
  }).join('');

  const squareBracketSplit = squigglyBracket.split(/[\[|\]]/g);

  const squareBracket = squareBracketSplit.map((val, index) => {
    if (parseInt(val.charAt())) {
      return squareBracketSplit[index - 1].repeat(parseInt(val.charAt()) - 1)
        + val.replace(val.charAt(), '');
    } else return val;
  }).join('');

  const parenthesisSplit = squareBracket.split(/[\(|\)]/g).map(val => {
    if (parseInt(val.charAt()) && val.length > 1) {
      return [val.charAt(), val.replace(val.charAt(), '')];
    } else return val;
  })

  const flattened = flatten(parenthesisSplit);

  const parenthesis = flattened.map((val, index) => {
    if (parseInt(val)) {
      return flattened[index - 1].repeat(parseInt(val) - 1);
    } else return val;
  }).join('');

  splitString(parenthesis).split('/').map(val => {
    const curr = val.split('-');
    if (curr.length === 1) curr.push('1');
    if (resultObject[curr[0]]) resultObject[curr[0]] += parseInt(curr[1]);
    else resultObject[curr[0]] = parseInt(curr[1]);
  });

  return resultObject;
};

const water = 'H2O'; // Solved
console.log(parseMolecule(water), ' should return {H: 2, O: 1}');

const magnesiumHydroxide = 'Mg(OH)2'; // Solved
console.log(parseMolecule(magnesiumHydroxide), ' should return {Mg: 1, O: 2, H: 2}');

const fremySalt = 'K4[ON(SO3)2]2';
console.log(parseMolecule(fremySalt), ' should return {K: 4, O: 14, N: 2, S: 4}');

const thing = 'C6H12O6';
console.log(parseMolecule(thing), ' should return {C: 6, H: 12, O: 6}');

const nextThing = 'As2{Be4C5[BCo3(CO2)3]2}4Cu5';
console.log(parseMolecule(nextThing), ' should return { As: 2, Be: 16, C: 44, B: 8, Co: 24, O: 48, Cu: 5 }');

const reallyComplex = '{[Co(NH3)4(OH)2]3Co}(SO4)3';
console.log(parseMolecule(reallyComplex), ' should return { Co: 4, N: 12, H: 42, O: 18, S: 3 }');
