let books = [];

//Set form to hidden
document.querySelector(".form-container").style.display = "none";

//Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `Title: ${title}\nAuthor: ${author}\nNumber of pages: ${pages}\nStatus: ${read}`;
  };
}

function addBookToArray() {
  // Get form input values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;

  // Create an instance of the Person object using the constructor
  const book = new Book(title, author, pages, read);

  // Do something with the person object, e.g., display it or perform further actions
  console.log(book);
  books.push(book);

  // Clear the form inputs
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;

  //call renderBooks function
  //renderBooks();
}

function renderBooks() {
    let bookContainer = document.querySelector(".book-container");
    
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book")

    //access last item in array
    let currentBook = books[books.length - 1];

    let title = currentBook.title;
    let author = currentBook.author;
    let pages = currentBook.pages;
    let read = currentBook.read;

    const bookInfoValues = [title, author, pages, read];
    const bookInfoHeaders = ["title", "author", "pages", "read"];
    const elements = {}; // An object to store the created elements

    for (let i = 0; i < bookInfoHeaders.length; i++) {
        const header = bookInfoHeaders[i];
        const value = bookInfoValues[i];
        
        // Create elements based on the header
        elements[`${header}Div`] = document.createElement("div");
        elements[`${header}Div`].classList.add(`${header}-div`);

        elements[`${header}Header`] = document.createElement("h3");
        elements[`${header}Header`].classList.add("header");
        elements[`${header}Header`].textContent = `${header}:`; // Set header text

        elements[`${header}Value`] = document.createElement("p");
        elements[`${header}Value`].classList.add("value");
        elements[`${header}Value`].textContent = `${header}: ${value}`; // Set value text

        // Append h3 and p elements as children of the div
        elements[`${header}Div`].appendChild(elements[`${header}Header`]);
        elements[`${header}Div`].appendChild(elements[`${header}Value`]);

        bookDiv.appendChild(elements[`${header}Div`]);
        
    }

    bookContainer.appendChild(bookDiv);
}

/*
function renderBooks() {
    // Get the grid container element
    const gridContainer = document.getElementById('book-container');

    // Define the number of rows and columns for the grid
    const numRows = 2;
    const numCols = 4;

    // Create the grid
    for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        // Create a grid cell element
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');

        // Add content to the cell (optional)

        // Append the cell to the grid container
        gridContainer.appendChild(gridCell);
    }
    }

};
*/

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  addBookToArray();
  renderBooks();
});

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
