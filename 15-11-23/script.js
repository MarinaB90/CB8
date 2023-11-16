const mockData = [
  {
    id: 1,
    roboName: "Mari",
    price: 445,
    imageUrl: "https://robohash.org/marina",
  },
  {
    id: 2,
    roboName: "Ciccio",
    price: 1000,
    imageUrl: "https://robohash.org/ciccio",
  },
];

const roboProdGen = (roboData) => {
  try {
    const wrapperEl = document.createElement("div");
    const imgEl = document.createElement("img");
    const textEl = document.createElement("div");
    const priceEl = document.createElement("p");
    const nameEl = document.createElement("h4");

    wrapperEl.className = "robo";
    imgEl.src = roboData.imageUrl;
    imgEl.alt = roboData.roboName;
    textEl.className = "text";
    priceEl.textContent = roboData.price + "$";
    nameEl.textContent = roboData.roboName;
    wrapperEl.append(imgEl, textEl);

    textEl.append(nameEl, priceEl);

    return wrapperEl;
  } catch (error) {
    console.error("error", error);
  }
};
const roboListEl = document.querySelector(".robo-list");

mockData.map((robo) => roboListEl.appendChild(roboProdGen(robo)));
