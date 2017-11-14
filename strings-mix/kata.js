const mix(s1, s2) => {

  const letterStore = {};

  [s1, s2].map((string, index) => {
    string.split('')
      .filter(letter => /[a-z]/.test(letter))
      .map(letter => {
        if (letterStore[letter]) {
          letterStore[letter][index + 1] += 1;
        } else {
          letterStore[letter] = {1: 0, 2: 0};
          letterStore[letter][index + 1] = 1;
        }
      });
  });

  const filtered = Object.keys(letterStore)
    .filter(key => letterStore[key][1] > 1 || letterStore[key][2] >1)
    .reduce((obj, key) => {
      // would have used simpler Object.values here, however not supported on CodeWars
      const volume = (v) => Object.keys(letterStore[v])
        .map(str => letterStore[v][str])
        .sort((a,b) => a - b).pop();
      const prefix = (v) => {
        if (letterStore[v][1] === letterStore[v][2]) return '=';
        return letterStore[v][1] > letterStore[v][2] ? 1 : 2;
      };
      obj[key] = {
        volume: volume(key),
        prefix: prefix(key)
      };
      return obj;
    }, {});

  return Object.keys(filtered)
    .sort((a,b) => {
      if (filtered[a].volume === filtered[b].volume) {
        if (filtered[a].prefix === filtered[b].prefix) return a < b ? -1 : 1;
        return filtered[a].prefix.toString() < filtered[b].prefix.toString() ? -1 : 1;
      }
      return filtered[a].volume < filtered[b].volume ? 1 : -1;
    })
    .map(key => `${filtered[key].prefix}:${Array.from({length: filtered[key].volume}, () => key).join('')}`)
    .join('/');

}

console.log('mix: ', mix(s1, s2));
