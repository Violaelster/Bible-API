// Event listener för knappen
document.getElementById("random-verse").addEventListener("click", () => {
  // Hämta valt språk/översättning
  const translation = document.getElementById("translation").value;

  // Lista med slumpmässiga bibelverser
  const verses = [
    "John 3:16",
    "Psalm 23:1",
    "Genesis 1:1",
    "Romans 8:28",
    "Proverbs 3:5",
    "Matthew 6:33",
    "Philippians 4:13",
  ];

  // Välj en slumpmässig vers
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];

  // API URL
  const apiUrl = `https://bible-api.com/${encodeURIComponent(
    randomVerse
  )}?translation=${translation}`;

  // Hämta data från API:et
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch the data");
      }
      return response.json();
    })
    .then((data) => {
      // Visa data på sidan
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `
                <h2>${data.reference}</h2>
                <p>${data.text}</p>
                
            `;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById(
        "output"
      ).innerHTML = `<p style="color: red;">An error occurred.</p>`;
    });
});
