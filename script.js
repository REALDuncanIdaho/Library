const myLibrary = [
    {
        title: "Dune",
        author: "Frank Herbert",
        pages: 896,
        read: true
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(book) {
    const table = document.getElementById("bookTable");
    const row = table.insertRow();

    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const readCell = row.insertCell(3);
    const readChangeCell = row.insertCell(4);
    const deleteCell = row.insertCell(5);

    titleCell.textContent = book.title;
    authorCell.textContent = book.author;
    pagesCell.textContent = book.pages;
    readCell.textContent = book.read ? "Yes":"No";

    const readButton = document.createElement("button");
    readButton.textContent = "Read";
    readButton.addEventListener("click", function() {
        book.read = !book.read;
        readCell.textContent = book.read ? "Yes":"No";
    });
    

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        const index = myLibrary.indexOf(book);
        if (index!== -1) {
            myLibrary.splice(index, 1);
        }
        table.deleteRow(row.rowIndex);
    });

    readChangeCell.appendChild(readButton);
    deleteCell.appendChild(deleteButton);
};

addBookToLibrary(myLibrary[0]);

function addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").checked;

    if (title && author && !isNaN(pages)) {
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        addBookToLibrary(newBook);
        
        document.getElementById("addBookForm").reset();
        document.getElementById("addBookForm").style.display = "none";
    } else {
        alert("bbzzzzzz wrong!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const showFormButton = document.getElementById("showForm");
    showFormButton.addEventListener("click", function () {
        const addBookForm = document.getElementById("addBookForm");
        addBookForm.style.display = addBookForm.style.display === "none" ? "block" : "none";
    });
});