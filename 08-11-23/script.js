// Esercizio 1

const sum = (one, two, three) => one + two + three;
const sub = (one, two, three) => one - two - three;
const mult = (one, two, three) => one * two * three;
const div = (one, two, three) => one / two / three;

function calculator(fn) {
  return fn;
}

console.log(calculator(sum(10, 20, 30), "+"));
console.log(calculator(sub(10, 20, 30), "-"));
console.log(calculator(mult(10, 20, 30), "*"));
console.log(calculator(div(10, 20, 30), "/"));

// function calculator(fn) {
//   return fn(10, 20, 30);
// };

// console.log(calculator(sum));
// console.log(calculator(sub));
// console.log(calculator(mult));
// console.log(calculator(div));

// Esercizio 2

const cart = [
  {
    id: 1,
    name: "book1",
    image: "img1.jpg",
    description: "descrizione book1",
  },
  {
    id: 2,
    name: "book2",
    image: "img2.jpg",
    description: "descrizione book2",
  },
  {
    id: 3,
    name: "book3",
    image: "img3.jpg",
    description: "descrizione book3",
  },
];

// //forEach //non restituisce un nuovo array e stampa solo il name degli alementi (book1, book2, book3)
cart.forEach((book) => {
  console.log(book.name);
});

// //map //
cart.map((book) => {
  console.log(book);
});

// Esercizio 3 avanzato

let firstArray = [2, 4, 6, 8];
let secondArray = [10, 12, 14, 16];

// //trasformazioni
const mult = firstArray.map((num) => num * 2);
console.log(mult);

const add = secondArray.map((num) => num + 5);
console.log(add);

// //filtraggio
const filt1 = mult.filter((num) => num > 10);
console.log(filt1);

const filt2 = add.filter((num) => num % 2 === 0);
console.log(filt2);

// //
const transformAndFilter = (firstArray, secondArray) => {
  const mult = firstArray.map((num) => num * 2);
  const add = secondArray.map((num) => num + 5);
  const filt1 = mult.filter((num) => num > 10);
  const filt2 = add.filter((num) => num % 2 === 0);
  return [filt1, filt2];
};
console.log(transformAndFilter(firstArray, secondArray));
