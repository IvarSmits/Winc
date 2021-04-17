function declareFunction(number1, number2) {
  let sq1 = number1 * number1;
  let sq2 = number2 * number2;
  let sum = sq1 + sq2;

  return sum * sum;
}

let functionExpression = function declareFunction(number1, number2) {
  let sq1 = number1 * number1;
  let sq2 = number2 * number2;
  let sum = sq1 + sq2;

  return sum * sum;
};

let arrowFunction = (number1, number2) => {
  let sq1 = number1 * number1;
  let sq2 = number2 * number2;
  let sum = sq1 + sq2;

  return sum * sum;
};

console.log(declareFunction(1, 2));
console.log(functionExpression(1, 2));
console.log(arrowFunction(1, 2));
