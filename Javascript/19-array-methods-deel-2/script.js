const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

// Hier komt jouw functie
const findSpiderMan = function (superheroes) {
  return superheroes.find((e) => e.name == "Superman");
};

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

const doubleArrayValues = function (arrayOfIntegers) {
  return arrayOfIntegers.map((e) => e + e);
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

const containsNumberBiggerThan10 = function (array) {
  return !!array.find((element) => element > 10);
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true

console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

const isItalyInTheGreat7 = function (array) {
  return !!array.find((element) => element == "Italy");
};
console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// result should be true

const tenFold = function (array) {
  array.forEach((element, i) => (array[i] = element *= 10));
  return array;
};

console.log(tenFold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

const isBelow100 = function (array) {
  return array.every((e) => e < 100);
};
console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
// result should be: false

const bigSum = function (array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};
console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
