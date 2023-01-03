let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}