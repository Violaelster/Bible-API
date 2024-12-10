const button = document.getElementById("imageButton"); //Hämtar knapp som byter bild
const image = document.getElementById("image"); //Hämtar bild-element

button.addEventListener("click", fetchAndChangeImage); //Startar funktionen för att byta bild när knappen klickas

function fetchAndChangeImage() {
  fetch(
    "https://pixabay.com/api/?key=47486558-491f2e0bd96e0464a2508cdfd&q=jesus&image_type=photo"
  )
    .then((response) => response.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.hits.length);
      image.src = data.hits[randomIndex].webformatURL;
    });
}

fetchAndChangeImage();

console.log(document.getElementById("imageButton")); // Bör skriva ut elementet eller `null`
console.log(document.getElementById("image")); // Bör skriva ut elementet eller `null`
