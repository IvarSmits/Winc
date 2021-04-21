let takeAGuess = function () {
  evaluateNumber(
    parseInt(
      prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...")
    )
  );
};

let evaluateNumber = function (number) {
  if (number == getRandomInt(0, 10)) {
    return alert("Gefeliciteerd je hebt gewonnen! Het spel is nu af");
  } else {
    alert("Dat is incorrect, probeer het opnieuw");
  }

  takeAGuess();
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// initieel bericht: Welkom wat is je naam
let name = prompt("Welkom! Wat is je naam?");

alert(`Hey ${name}`);

takeAGuess();

alert(`Dag ${name}. Tot de volgende keer`);

// func begroeting
// get input
// pick math random
// evaluate
// get input
// pick math random
// evaluate

// Max 5 pogingen

//nummer range
