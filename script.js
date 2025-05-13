const myLibrary = [];

function Book(title, author, pages) {
    if (!new.target) {
        throw Error("'New' operator must be used to call this.");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookID = crypto.randomUUID();
}

function addBook(form) {
    if (!form.title.value) {
        return false;
    }

    const newBook = new Book(form.title.value, form.author.value, form.pages.value);
    myLibrary.push(newBook);
    event.preventDefault();
    var div = document.createElement("div");
    div.style.width = "400px";
    div.style.height = "200px";
    div.style.backgroundColor = "#e9c46a";
    div.style.color = "#023047";
    div.style.textAlign = "center";
    div.innerHTML = "<strong>" + form.title.value + "</strong><br>" + form.author.value + "<br>" + form.pages.value + " pages"
    div.style.borderStyle = "solid";
    div.style.margin = "10px";
    div.style.padding= "10px";
    div.style.borderRadius = "12px";
    div.style.fontSize = "1.2em";
    document.getElementsByClassName("library")[0].appendChild(div);
    document.getElementById("bookInfo").reset();
}

function displayLibrary(myLibrary) {
    myLibrary.forEach(Book => {
        var div = document.createElement("div");
        div.style.width = "400px";
        div.style.height = "200px";
        div.style.backgroundColor = "#e9c46a";
        div.style.color = "#023047";
        div.style.textAlign = "center";
        div.innerHTML = "<strong>" + Book.title + "</strong><br>" + Book.author + "<br>" + Book.pages + " pages"
        div.style.borderStyle = "solid";
        div.style.margin = "10px";
        div.style.padding= "10px";
        div.style.borderRadius = "12px";
        div.style.fontSize = "1.2em";
        document.getElementsByClassName("library")[0].appendChild(div);
    })
}

function openSidebar() {
    var sidebar = document.getElementsByClassName("sidebar")[0];
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}

displayLibrary(myLibrary);