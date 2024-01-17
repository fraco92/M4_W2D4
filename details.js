const params = new URLSearchParams(location.search);
const id = params.get("id");
const bookContainer = document.getElementById("bookDetails__container");

const displayBook = (book) => {};

if (id) {
  fetch("https://striveschool-api.herokuapp.com/books/" + id)
    .then((response) => response.json())
    .then((data) => {
      displayBook(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
}
