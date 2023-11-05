// Esercizio n1

function getTemperature(degree) {
  if (degree < 16) {
    return "Cold";
  } else if (degree >= 16 && degree <= 24) {
    return "Mild";
  } else if (degree >= 33) {
    return "Hot";
  } else {
    return "Temperature not perceived";
  }
}

console.log(getTemperature());

// Esercizio n2

const mySelf = {
  name: "Marina",
  surname: "Biondo",
  age: "33",
  height: "1,65",
  city: "Palermo",
  whoIam: function () {},
};

mySelf.whoIam();
console.log(mySelf);

// Esercizio n3

const favorites = [];

function addToFavorites(bestMovie) {
  favorites.push(bestMovie);
}

addToFavorites("Hunger games");
addToFavorites("Pulp fiction");
addToFavorites("The imitation game");

console.log(favorites);

function showFavorites() {
  console.log(favorites);
}
