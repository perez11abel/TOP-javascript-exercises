const removeFromArray = (...args) => {
    const array = args[0];
    const newArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    return newArray;
  };

removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
