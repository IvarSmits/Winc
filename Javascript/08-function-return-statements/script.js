var checkIfNumberIsBig = function (number) {
  if (number > 100) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIfNumberIsBig(101));
console.log(checkIfNumberIsBig(50));

var brendaAI = function (maxNumberInClub, CurrentNumberInClub, age) {
  if (age < 18) {
    return "This club is for adults";
  } else if (CurrentNumberInClub >= maxNumberInClub) {
    return "it's too busy now, come back later";
  } else {
    return "Come in";
  }
};

console.log(brendaAI(100, 99, 22));

var calculateAverage = function (arrNumbers) {
  return arrNumbers.reduce((a, b) => a + b) / arrNumbers.length;
};

console.log(calculateAverage([1, 2]));
