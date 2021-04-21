//Oude style
colors = ["yellow", "blue", "red", "orange"];

var i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//Nieuwe style
colors.forEach((e) => console.log(e));

//Mijn for loop beslaat 3 regels en de while loop 5 regels.
// forEach method maar 1
// ForEach is een stuk leesbaarder en is discriptief

objFruits = {
  apple: 12,
  orange: 99,
  pear: 2,
};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
