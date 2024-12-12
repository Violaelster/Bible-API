// Event listener for the "Generate Random Verse" button
document.getElementById("random-verse").addEventListener("click", () => {
  // Get the selected translation from the dropdown menu
  const translation = document.getElementById("translation").value;

  // API URL to fetch a random verse with the selected translation
  const apiUrl = `https://bible-api.com/?random=verse&translation=${translation}`;

  // Fetch data from the Bible API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data"); //Message if error
      }
      return response.json();
    })
    .then((data) => {
      // Display the fetched verse and reference on the page
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `
        <h2>${data.reference}</h2> <!-- Displays the verse reference -->
        <p>${data.text}</p>        <!-- Displays the verse text -->
      `;
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch process
      console.error("Error:", error);
      document.getElementById("output").innerHTML = `
        <p style="color: red;">An error occurred. Please try again later.</p>
      `;
    });
});
