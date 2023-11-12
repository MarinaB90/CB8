const textEl = document.querySelector(".text");
const pElone = document.createElement("p");
const pEltwo = document.createElement("p");

const pElthree = document.querySelector(".p3");

pElone.textContent = "04.10.2022";
pEltwo.textContent = "31.01.2023";

textEl.insertBefore(pElone, pElthree);
textEl.insertBefore(pEltwo, pElthree);

/* **** */

const wrapperEl = document.querySelector(".wrapper");
const btnEl = document.querySelector(".button");

btnEl.addEventListener("click", () => (wrapperEl.style.display = "none"));
