let books = [];

//Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//add method to prototype
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToArray() {
  // Get form input values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;

  const book = new Book(title, author, pages, read);

  console.log(book);

  //add object to array
  books.push(book);

  // Clear the form inputs
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;

  renderBooks();
}

function renderBooks() {
  let bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">${book.author}</h5>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${
                  book.read ? "Read" : "Not Read Yet"
                }</p>
                <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read Status</button>
            </div>`;

    bookContainer.appendChild(bookDiv);
  }
}

function removeBook(index) {
  books.splice(index, 1);
  //update rendered books
  renderBooks();
}

function toggleRead(index) {
  books[index].toggleRead();
  //update rendered books
  renderBooks();
}

function showForm() {
  let formContainer = document.querySelector(".form-container");
  let bookContainer = document.querySelector(".book-container");

  if (formContainer.style.display === "none") {
    formContainer.style.display = "flex";
    bookContainer.style.display = "none";
  } else {
    formContainer.style.display = "none";
    bookContainer.style.display = "flex";
  }
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  addBookToArray();
});
