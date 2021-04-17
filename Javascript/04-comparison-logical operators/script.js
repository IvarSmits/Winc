const age = 23;

if (age > 17) {
  console.log("Je mag naar binnen!");
} else {
  console.log("Je moet helaas buiten blijven.");
}

const isFemale = true;

if (isFemale) {
  console.log("Is vrouw");
} else {
  console.log("Is geen vrouw");
}

const driverStatus = "bob";

if (driverStatus == "bob") {
  console.log("De bestuurder mag rijden");
} else {
  console.log("De bestuurder mag niet rijden");
}

if (age >= 18 && age <= 25) {
  console.log("je krijgt 50% korting");
} else {
  console.log("je moet de volle mep betalen");
}

const name = "Bob";

if (name == "Sarah" || name == "Bram") {
  console.log("Gratis bier!");
} else {
  console.log("Je moet betalen voor je bier");
}

const totalAmount = 40;

if (totalAmount >= 100) {
  console.log("Gratis flesje champagne");
} else if (totalAmount >= 50) {
  console.log("Gratis portie nachos");
} else if (totalAmount >= 25) {
  console.log("Gratis bitterballen");
}
