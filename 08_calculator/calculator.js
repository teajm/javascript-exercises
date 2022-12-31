const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((sum, currentVal) => sum + currentVal, 0);
};

const multiply = function(array) {
  return array.reduce((sum, currentVal) => sum * currentVal);
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(n) {
  if (n == 0){
    return 1;
  }
  else{
    let total = 1;
    for( let i = n; i > 0; i--){
      total *=i;
    }
    return total;
  }
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
