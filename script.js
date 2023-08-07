let books = [];

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

function addBookToLibrary() {
    null
}

function showForm() {
    let form = document.getElementById("form");
    if(form.style.visibility === "hidden") {
        form.style.visibility = "visible";
    } else {
        form.style.visibility = "hidden";
    }
    
}