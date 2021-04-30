const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

const arrSuperheroesNames = superheroes.map((e) => e.name);
console.log(arrSuperheroesNames);

const arrSuperHeroesLight = superheroes.filter((e) => e.weight < 190);
console.log(arrSuperHeroesLight);

const arrSuperheroesNamesAndweight = superheroes
  .filter((e) => e.weight == 200)
  .map((e) => e.name);

console.log(arrSuperheroesNamesAndweight);

const arrFirstAppearance = superheroes.map((e) => [e.name, e.first_appearance]);

console.log(arrFirstAppearance);

const arrDcSuperheroes = superheroes.filter((e) => e.publisher == "DC Comics");
console.log(arrDcSuperheroes);
const arrMarvelComics = superheroes.filter(
  (e) => e.publisher == "Marvel Comics"
);
console.log(arrMarvelComics);

//Sum DC comic heroes weight
const arrFilteredDcComicHeroes = superheroes.filter(
  (e) => e.publisher == "DC Comics" && Number.isInteger(parseInt(e.weight))
);

const intSumDcComicsWeight = arrFilteredDcComicHeroes.reduce(
  (accumulator, currentValue) => accumulator + parseInt(currentValue.weight),
  0
);
console.log(intSumDcComicsWeight);

//Sum marvel comic heroes weight
const arrFilteredMarvelComicHeroes = superheroes.filter(
  (e) => e.publisher == "Marvel Comics" && Number.isInteger(parseInt(e.weight))
);

const intSumMarvelComics = arrFilteredMarvelComicHeroes.reduce(
  (accumulator, currentValue) => accumulator + parseInt(currentValue.weight),
  0
);
console.log(intSumMarvelComics);

// const arrWeightAllMarvelHeroes = superheroes
//   .filter((e) => e.publisher == "Marvel Comics" && Number.isInteger(e.weight))
//   .reduce((accumulator, currentValue) => accumulator + currentValue.weight);

// console.log(arrWeightAllMarvelHeroes);
// const arrMaxWeightSuperhero = superheroes
//   .filter((e) => Number.isInteger(e.weight))
//   .reduce((prev, current) => (prev.weight > current.weight ? prev : current));
