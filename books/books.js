let bookShelf = document.getElementById("bookShelf"); 
let bookInfo = document.getElementById("bookInfo"); 
let authorName = document.getElementById("name"); 
let authorAge = document.getElementById("age"); 
let authorNationality = document.getElementById("nationality"); 
let authorGenre = document.getElementById("genre"); 
let wiltb = document.getElementById("wiltb"); 
let authorPicture = document.getElementById("authorPic")


let currentBooks = [
  {
    title: '',
    img: '../treoh-johnOrtberg.jpg',
    author: {
      name: "John Mark Comer",
      age:  45,
      nationality: "American",
      genre: "Christian Nonfiction, Spiritual Formation",
      wiltb: "I like this book because it shows me how to take my time with many things.",
      img: "../johnmarkc-1.webp"
    },
    
  },

  {
    title: '',
    img: '../butHowDoItKnow-J.ClarkScott-1.jpg',
    author: {
      name: "J. Clark Scott",
      age: "61 (born April 6, 1964)",
      nationality: "American",
      genre: "Technology, Computer Science, Nonfiction",
      wiltb: "Explains how computers work in a very simple manner",
      img: "../J.clarkScott-1.jpg"
    },
  },

  {
    title: '',
    img: '../despentes-vernonSubutex-1.avif',
    author: {
      name: "Virginie Despentes",
      age: "56 (born June 13, 1969)",
      nationality: "French",
      genre: "Literary Fiction, Social Commentary, Feminist Literature",
      wiltb: "The book provides a raw and realistic look at modern society while following interconnected characters through contemporary Paris.",
      img: "../virginieDespentes-1.webp"
    },    
  },

];

function addBooksToShelf(currentBooks){

  for(let i = 0; i < currentBooks.length; i++){
    const currentBook = currentBooks[i];

    let div = document.createElement("div");

    div.addEventListener('click', function(){
      showBookInfo(currentBook);
    });

    div.innerHTML = `
    <img src = ${currentBook.img}>
    `;
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

  authorPicture.innerHTML = `
    <img src = "${currentBook.author.img}">
  
  `;

}