const add = function(a, b) {
  let result = a + b; 

  return result;
};

const subtract = function(a, b) {
  let result = a - b;

  return result;
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function(number) {
return number.reduce((total, current) => total * current, 1)
};

const power = function(a, b) {
	let result = 1; 

  for (let i = 0; i < b; i++) {
    result *= a; 
  }
  return result;
};

const factorial = function(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i; 
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
