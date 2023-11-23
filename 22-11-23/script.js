// ESERCIZIO 1

// const getImagesList = async () => {
//   const res = await fetch("https://picsum.photos/v2/list");
//   const data = await res.json();

//   return data;
// };

// getImagesList().then((data) =>
//   console.log(data.map((photo) => photo.download_url))
// );

// ESERCIZIO 2

const data = {
  id: "0",
  author: "Alejandro Escamilla",
  download_url: "https://picsum.photos/id/0/5000/3333",
};

const renderImgAndText = (dataObj) => {
  const wrapper = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("p");

  img.src = dataObj.download_url;
  img.width = "500";
  text.textContent = dataObj.author;

  wrapper.append(img, text);
  return wrapper;
};

document.body.appendChild(renderImgAndText(data));
