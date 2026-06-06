let bookShelf = document.getElementById("bookShelf"); 

let currentBooks = [
  {
    title: '',
    img: '',
  },

  {
    title: '',
    img: '',

  },

  {
    title: '',
    img: '',
  },
];

function addBooksToShelf(currentBooks){

  for(let i = 0; i < currentBooks.length; i++){
    const currentBook = currentBooks[i];

    let div = document.createElement("div");

    bookShelf.appendChild(div);
  }
}

addBooksToShelf(currentBooks);