let bookShelf = document.getElementById("bookShelf"); 
let bookInfo = document.getElementById("bookInfo"); 
let authorName = document.getElementById("name"); 
let authorAge = document.getElementById("age"); 
let authorNationality = document.getElementById("nationality"); 
let authorGenre = document.getElementById("genre"); 
let wiltb = document.getElementById("wiltb"); 


let currentBooks = [
  {
    title: '',
    img: '',
    author: {
      name: "John Mark Comer",
      age:  45,
      nationality: "American",
      genre: "Christian Nonfiction, Spiritual Formation",
      wiltb: "I like this book because it shows me how to take my time with many things.",
      img: ""
    }
    
  },

  {
    title: '',
    img: '',
    author: {
      name: "jhd",
      age:  45,
      nationality: "American",
      genre: "Christian Nonfiction, Spiritual Formation",
      wiltb: "I like this book because it shows me how to take my time with many things.",
      img: ""
    }

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

    div.addEventListener('click', function(){
      showBookInfo(currentBook);
    });

    bookShelf.appendChild(div);
  }
}

addBooksToShelf(currentBooks);

function showBookInfo(currentBook){
  bookInfo.classList.add("show");

  authorName.textContent = currentBook.author.name;
  authorAge.textContent = ` Age: ${currentBook.author.age}`;
  authorNationality.textContent = ` Nationality: ${currentBook.author.nationality}`;
  authorGenre.textContent = ` Genre: ${currentBook.author.genre}`;
  wiltb.textContent = `${currentBook.author.wiltb}`;
}