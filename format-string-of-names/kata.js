const names = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];

const list = (names) => {
  if (names.length === 0) return '';
  return names.map(item => item.name)
    .reduce((acc, curr, index) => {
      const join = index === (names.length -1) ? ' & ' : ', ';
      return `${acc}${join}${curr}`;
    });
};

console.log(list(names));
