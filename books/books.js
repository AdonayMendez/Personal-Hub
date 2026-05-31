const booksSection = document.getElementById("booksSection");

let books = [
  {
    title: "Let Them",
    description: "Mel Robbins", 
  },

  {
    title: "Let Thddem",
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
    div.classList.add("container")

    const bookOne = books[i];
    const bookTwo = books[i + 1];

    let secondBookHTML = "";

    if(bookTwo) {
      secondBookHTML = `      
        <div class="container-book">
          <div class="book">${bookTwo.title}</div>
          <div class="description">${bookTwo.description}</div>
        </div>          
      `;
    }

    div.innerHTML = `
       <div class="container-book">
          <div class="book">${bookOne.title}</div>
          <div class="description">${bookOne.description}</div>
        </div> 

        ${secondBookHTML}

   `;

    booksSection.appendChild(div);
  }
}

addBooksToPage(books);
