const good = '0 0 0 0 0 10';
const evil = '0 1 1 1 1 0 0';


const goodVsEvil = (good, evil) => {

  const goodScores = {
    'Hobbits': 1,
    'Men': 2,
    'Elves': 3,
    'Dwarves': 3,
    'Eagles': 4,
    'Wizards': 10
  };

  const evilScores = {
    'Orcs': 1,
    'Men': 2,
    'Wargs': 2,
    'Goblins': 2,
    'Uruk Hai': 3,
    'Trolls': 5,
    'Wizards': 10
  };

  const goodScoreArray = Object.keys(goodScores).map(resource => goodScores[resource]);
  const goodTotal = good.split(' ').reduce((acc, curr, index) => {
    return acc + (curr * goodScoreArray[index]);
  }, 0);

  const evilScoreArray = Object.keys(evilScores).map(resource => evilScores[resource]);
  const evilTotal = evil.split(' ').reduce((acc, curr, index) => {
    return acc + (curr * evilScoreArray[index]);
  }, 0);

  let result;
  if (goodTotal > evilTotal) result = 'Good triumphs over Evil';
  if (evilTotal > goodTotal) result = 'Evil eradicates all trace of Good';
  if (goodTotal === evilTotal) result = 'No victor on this battle field';

  return `Battle Result: ${result}`;
};

console.log(goodVsEvil(good, evil));
