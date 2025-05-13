const myLibrary = [];

function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw Error("'New' operator must be used to call this.");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = readStatus;
    this.bookID = crypto.randomUUID();
}

function addBook(bookTitle) {
    bookTitle = new Book(title, author, pages, readStatus);
    myLibrary.push(bookTitle);
}

function displayLibrary(myLibrary) {
    myLibrary.forEach(title => {
        var div = document.createElement("div");
        div.style.width = "200px";
        div.style.height = "200px";
        div.style.background = "white";
        div.style.color = "#023047";
        div.style.fontWeight = "bold";
        div.style.textAlign = "center";
        div.innerHTML = title;
        div.style.borderStyle = "solid";
        div.style.margin = "10px";
        div.style.padding= "10px";
        div.style.borderRadius = "12px";

        document.getElementById("container").appendChild(div);
    })
}

displayLibrary(myLibrary);