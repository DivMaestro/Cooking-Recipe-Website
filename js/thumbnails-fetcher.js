// Fetch JSON data
fetch("JSON/thumbnails.json")
  .then((response) => response.json())
  .then((data) => {

    createGallery(data.thumbnails);
    // Извиква функцията за създаване на thumbnails използвайки извлечените данни от обектите във thumbnails.json
    createThumbnails(data.thumbnails);
  })
  .catch((error) => console.error("Error fetching JSON:", error));


const createGallery = (frames) =>{
let frameContainer = document.getElementById("frame-container");

frames.forEach((frame) =>{
  let frameElement = document.createElement("div");
  frameElement.className = "Slide";
  frameElement.innerHTML = `
  <img src="${frame.src}" alt="${frame.heading}">
  <div class="banner-content">
    <article>
      <h1>${frame.heading}</h1>
      <p>${frame.subject}</p>
    </article>
  </div>
  `;

  frameContainer.appendChild(frameElement);
})
}
// Функция за създаване на  thumbnail елементи
const  createThumbnails = (thumbnails) => {
  let thumbnailContainer = document.getElementById("thumbnail-container");

  //  Създава се цикъл в който се създават динамично HTML елементи за thumbnail според броят обекти в JSON файлът
  thumbnails.forEach((thumbnail) => {
    let thumbnailElement = document.createElement("div");
    thumbnailElement.className = "col-md-6";
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
