// Fetch JSON data
fetch("JSON/thumbnails.json")
  .then((response) => response.json())
  .then((data) => {
    // Извиква функцията за създаване на thumbnails използвайки извлечените данни от thumbnails.json
    createThumbnails(data.thumbnails);
  })
  .catch((error) => console.error("Error fetching JSON:", error));

// Функция за създаване на  thumbnail елементи
const  createThumbnails = (thumbnails) => {
  let thumbnailContainer = document.getElementById("thumbnail-container");

  // Loop through the thumbnails and create elements
  thumbnails.forEach((thumbnail) => {
    let thumbnailElement = document.createElement("div");
    thumbnailElement.className = "col-lg-6 col-12";
    thumbnailElement.innerHTML = `
    <div class='thumbnail'>
    <div class='thumbnail-image'>
    <img src="${thumbnail.src}" alt="${thumbnail.heading}">
    </div>
    <div class='caption'>
    <span>${thumbnail.category}</span>
    <h3>${thumbnail.heading}</h3>
    <p>${thumbnail.subject}</p>
    </div>
    <div class="time-and-views">
    <div class="published-day">
      <div class="icon-container">
        <img src="icons/calendar.svg" alt="SVG Icon" />
      </div>
      <span>${thumbnail.published}</span>
    </div>
    <div class="views">
      <div class="icon-container">
        <img src="icons/eye.svg" alt="SVG Icon" />
      </div>
      <span>${thumbnail.views}</span>
    </div>
    </div>
  </div>
  `;
    thumbnailContainer.appendChild(thumbnailElement);
  });
}
