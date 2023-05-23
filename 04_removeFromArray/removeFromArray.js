const removeFromArray = function(array1, ...args) {
    args.forEach((arg) => {
    const index = array1.indexOf(arg);
    if (index > -1)
      array1.splice(index, 1);
  });
  return array1;
    
};

// Do not edit below this line
module.exports = removeFromArray;