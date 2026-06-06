//! Currently Reading Id's

let bookShelf = document.getElementById("bookShelf"); 
let bookInfo = document.getElementById("bookInfo"); 
let authorName = document.getElementById("name"); 
let authorAge = document.getElementById("age"); 
let authorNationality = document.getElementById("nationality"); 
let authorGenre = document.getElementById("genre"); 
let wiltb = document.getElementById("wiltb"); 
let authorPicture = document.getElementById("authorPic");

//! Up Next Reading Id's

let bookShelf2 = document.getElementById("bookShelf-2"); 
let bookInfo2 = document.getElementById("bookInfo-2"); 
let authorName2 = document.getElementById("name-2"); 
let authorAge2 = document.getElementById("age-2"); 
let authorNationality2 = document.getElementById("nationality-2"); 
let authorGenre2 = document.getElementById("genre-2"); 
let wiltb2 = document.getElementById("wiltb-2"); 
let authorPicture2 = document.getElementById("authorPic-2");



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


let upNextBooks = [
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

function addCurrentBooksToShelf(currentBooks){

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

function addNextBooksToShelf(upNextBooks){

  for(let i = 0; i < upNextBooks.length; i++){
    const upNextBook = upNextBooks[i];

    let div = document.createElement("div"); 

    div.addEventListener('click', function(){
      showBookInfo2(upNextBook); 
    });

    div.innerHTML = `
    
    <img src = "${upNextBook.img}">
    
    `;

    bookShelf2.appendChild(div);
  }
}

function showBookInfo2(upNextBook){
   bookInfo2.classList.add("show"); 

   authorName2.textContent = upNextBook.author.name;
   authorAge2.textContent = upNextBook.author.age;
   authorNationality2.textContent = upNextBook.author.nationality;
   authorGenre2.textContent = upNextBook.author.genre;
   wiltb2.textContent = upNextBook.author.wiltb;

   authorPicture2.innerHTML = `
   
   <img src = "${upNextBook.author.img}">
   `;

}




addCurrentBooksToShelf(currentBooks);
addNextBooksToShelf(upNextBooks);
