const params = new URLSearchParams(location.search);
const id = params.get("id");
const bookContainer = document.getElementById("bookDetails__container");

/**
 *
 * @param {{asin: string, title: string, img: string, price: number, title: string, category: string}} book
 */
const displayBook = ({ asin, price, img, title, category }) => {
  bookContainer.innerHTML = `<div class="card mb-3" style="max-width: 540px">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${img}" class="img-fluid rounded-start" alt="${title}" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <h6 class="card-text">${category}</h6>
      <p class="card-text">Asin: ${asin}</p>
      <p class="card-text">Prezzo: €${price}</p>
      </div>
    </div>
  </div>
</div>`;
};

if (id) {
  fetch("https://striveschool-api.herokuapp.com/books/" + id)
    .then((response) => response.json())
    .then((data) => {
      displayBook(data);
    })
    .catch((error) => console.error(error));
}
