let dataBooks;
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((data) => {
    dataBooks = data;
    showBooks();
  })
  .catch((error) => console.error(error));

const getBooks = () => {
  const searchFilter = searchInput.value.toLowerCase();
  if (dataBooks) {
    return dataBooks.filter((book) =>
      book.title.toLowerCase().includes(searchFilter)
    );
  } else {
    return [];
  }
};

const addToCart = (bookTitle) => {
  const book = dataBooks.findIndex((book) => book.title == bookTitle);
  dataBooks[book].inCart = !dataBooks[book].inCart;
  showBooks();
};

const showBooks = () => {
  const books = getBooks();
  bookList.innerHTML = "";

  books.forEach((book) => {
    let inCartStyle = "";
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    if (book.inCart) {
      inCartStyle = "border-warning";
    }

    card.innerHTML = `
        <div class="card ${inCartStyle}" style="width: 18rem;">
          <img src="${book.img}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text mb-1">Price: ${book.price} €</p>
            <p class="card-text mb-1">Category: ${book.category}</p>
            <a class="btn btn-primary" onclick="addToCart('${book.title}')">Cart</a>
          </div>
        </div>
      `;

    bookList.appendChild(card);
  });
};

searchInput.addEventListener("input", () => {
  showBooks();
});
