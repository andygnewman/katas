Array.prototype.sameStructureAs = function(testArray) {

  const getArrayStructure = (array) => {
    let structure = '';

    const arrayStructure = (array) => {
      array.map(item => {
        if (item instanceof Array) {
          structure += 'A';
          return arrayStructure(item);
        }
        structure += 'D';
      });
    };

    arrayStructure(array);
    return structure;
  };

  console.log('base: ', getArrayStructure(this));
  console.log('testArray: ', getArrayStructure(testArray));

  return getArrayStructure(this) === getArrayStructure(testArray);
};

console.log([1, 1, [2, 1, [3, 2]], 1].sameStructureAs([1, 1, [1, 1], 1]));
