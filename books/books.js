const booksSection = document.getElementById("booksSection");

let books = [
  {
    title: "Let Them",
    description: "Mel Robbins", 
  },

  {
    title: "Hello World",
    description: "Mel Robbins", 
  },

  {
    title: "Let Them",
    description: "Mel Robbins", 
  },

  {
    title: "Let Them",
    description: "Mel Robbins", 
  },


];


function addBooksToPage(books){

  for(let i=0; i < books.length; i += 2){

    let div = document.createElement("div");

    div.classList.add("container");

    const book1 = books[i];
    const book2 = books[i + 1];

    let book2InnerHTML = "";

    if(book2) {

      book2InnerHTML = ` 
      <div class="container-book">
          <div class="book">${book2.title}</div>
          <div class="description">${book2.description}</div>
      </div>
      `;
    }


    div.innerHTML = `
      <div class="container-book">
          <div class="book">${book1.title}</div>
          <div class="description">${book1.description}</div>
      </div>

      ${book2InnerHTML}
    `;


    booksSection.appendChild(div);
  }
}

addBooksToPage(books); 