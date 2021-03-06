const addTheWordCool = function (array) {
  array.push("cool");
  return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

const amountOfElementsInArray = function (array) {
  return array.length;
};
console.log(amountOfElementsInArray(["appels", "peren", "citroenen"]));
// 3

const selectBelgiumFromBenelux = function (array) {
  return array[0];
};
console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

const lastElementInArray = function (array) {
  return array[array.length - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
  return array.slice(1);
};

//Using returned value
const impeachTrumpSplice = function (array) {
  //mutates the presidents array;
  return array.splice(1, 99999999);
};

//using the mutated array
const impeachTrumpSplice1 = function (array1) {
  const arrayWithoutTrump = array1.splice(0, 1);
  return array1;
};
console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
const presidents1 = ["Trump", "Obama", "Bush", "Clinton"];
console.log(impeachTrumpSplice1(presidents1)); // ["Obama", "Bush", "Clinton"]

const stringsTogether = function (array) {
  return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

combineArrays = function (array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
// resultaat: [1,2,3,4,5,6]
