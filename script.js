let books = [];
let formSetHidden = document.querySelector(".form-container").style.display = "none";



//Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;;
    this.read = read;
    this.info = function() {
        return (`Title: ${title}\nAuthor: ${author}\nNumber of pages: ${pages}\nStatus: ${read}`);
    }
}

function addBookToArray() {
    // Get form input values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const read = document.getElementById('read').checked;
  
    // Create an instance of the Person object using the constructor
    const book = new Book(title, author, pages, read);
  
    // Do something with the person object, e.g., display it or perform further actions
    console.log(book);
    books.push(book);
  
    // Clear the form inputs
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;

    //call renderBooks function
    //renderBooks();
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

  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    addBookToArray();
  });
  

function showForm() {
    let formContainer = document.querySelector(".form-container");
    let bookContainer = document.querySelector(".book-container")
    
    if(formContainer.style.display === "none") {
        formContainer.style.display = "flex";
        bookContainer.style.display = "none"
    } else {
        formContainer.style.display = "none";
        bookContainer.style.display = "block"
    }
    
}