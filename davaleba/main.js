// Davaleba N1
const users = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];

const users1 = [
  { name: "Sandro", age: 20 },
  { name: "Giorgi", age: 24 },
  { name: "Vaxo", age: 20 },
];

const minAge = function (user) {
  //Davalagot obieqtebi asakis zrdis mixedvit
  const sorted = user.sort((a, b) => a.age - b.age);

  // funqcia dawerilia imis gatvaliswinebit rom yvelaze patara asakis adamiani sheidzleba iyos ertze meti
  const youngest = [];
  sorted.map((el) => (el.age === sorted[0].age ? youngest.push(el.name) : ""));
  return [...youngest].join(", ");
};

console.log(minAge(users));
console.log(minAge(users1));

// Davaleba N2
const newObj = function (obj) {
  return { ...obj };
};

const user = {
  name: "Sandro",
  age: 25,
};

const newUser = newObj(user);

console.log(user, newUser, newUser === user);

// Davaleba N3
const rollDice = function () {
  let dice;
  let n = 0;
  while (dice !== 3) {
    dice = parseInt(Math.random() * 6) + 1;
    n++;
  }
  //   console.log(n);
  return n;
};

const a = rollDice();
const b = rollDice();

switch (true) {
  case a < b:
    console.log("Player a is Winner");
    break;
  case a > b:
    console.log("Player b is Winner");
    break;
  default:
    console.log("It's Draw");
    break;
}
