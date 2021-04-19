let isAdult = function (age) {
  if ((age) => 18) {
    return true;
  }

  return false;
};

let greetAdult = function (age) {
  if (isAdult(age)) {
    return "Hello there";
  }

  return "Hey kiddo";
};

// Vat calculations

//exercise 1
let priceIncludingVat = function (basePrice, vat) {
  return calculateVat(basePrice, vat);
};

let calculateVat = (basePrice, vat) => basePrice * (vat / 100 + 1);

console.log(priceIncludingVat(1000, 21));

// exercise 2
let getBasePriceAndVatAmount = function (includingVat, vatPercentage) {
  return calculateBaseAndVat(includingVat, vatPercentage);
};

let calculateBaseAndVat = function (includingVat, vatPercentage) {
  let devideBy = vatPercentage / 100 + 1;
  let basePrice = includingVat / devideBy;

  let vatAmount = includingVat - basePrice;

  return [basePrice, vatAmount];
};

console.log(getBasePriceAndVatAmount(1000, 21));
