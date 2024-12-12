// Get the button element used to change the image
const button = document.getElementById("imageButton");

// Get the image element where the image will be displayed
const image = document.getElementById("image");

// Add an event listener to the button that triggers the image change
button.addEventListener("click", fetchAndChangeImage);

// Function to fetch a random image from the Pixabay API and update the image element
function fetchAndChangeImage() {
  // Fetch a set of images related to "Jesus" from Pixabay
  fetch(
    "https://pixabay.com/api/?key=47486558-491f2e0bd96e0464a2508cdfd&q=jesus&image_type=photo"
  )
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      // Select a random image from the response data
      const randomIndex = Math.floor(Math.random() * data.hits.length);
      // Update the image element's source with the new image URL
      image.src = data.hits[randomIndex].webformatURL;
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch process
      console.error("Error fetching image:", error);
    });
}

// Call the function once when the page loads to display an initial image
fetchAndChangeImage();
