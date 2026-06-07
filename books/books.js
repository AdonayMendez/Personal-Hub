//! Currently Reading Id's

let bookShelf = document.getElementById("bookShelf"); 
let bookInfo = document.getElementById("bookInfo"); 
let authorName = document.getElementById("name"); 
let authorAge = document.getElementById("age"); 
let authorNationality = document.getElementById("nationality"); 
let authorGenre = document.getElementById("genre"); 
let wiltb = document.getElementById("wiltb"); 
let authorPicture = document.getElementById("authorPic");

let currentBookInfoOverlay = document.getElementById("currentBookInfoOverlay");


//! Up Next Reading Id's

let bookShelf2 = document.getElementById("bookShelf-2"); 
let bookInfo2 = document.getElementById("bookInfo-2"); 
let authorName2 = document.getElementById("name-2"); 
let authorAge2 = document.getElementById("age-2"); 
let authorNationality2 = document.getElementById("nationality-2"); 
let authorGenre2 = document.getElementById("genre-2"); 
let wiltb2 = document.getElementById("wiltb-2"); 
let authorPicture2 = document.getElementById("authorPic-2");

let upNextBookInfoOverlay = document.getElementById("upNextBookInfoOverlay");


//! Completed

let bookShelf3 = document.getElementById("bookShelf-3"); 
let bookInfo3 = document.getElementById("bookInfo-3"); 
let authorName3 = document.getElementById("name-3"); 
let authorAge3 = document.getElementById("age-3"); 
let authorNationality3 = document.getElementById("nationality-3"); 
let authorGenre3 = document.getElementById("genre-3"); 
let wiltb3 = document.getElementById("wiltb-3"); 
let authorPicture3 = document.getElementById("authorPic-3");

let completedBookInfoOverlay = document.getElementById("completedBookInfoOverlay");


//! Book Info Overlay

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


let completedBooks = [
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
  currentBookInfoOverlay.classList.remove("show");



  authorName.textContent = currentBook.author.name;
  authorAge.textContent = ` Age: ${currentBook.author.age}`;
  authorNationality.textContent = ` Nationality: ${currentBook.author.nationality}`;
  authorGenre.textContent = ` Genre: ${currentBook.author.genre}`;
  wiltb.textContent = `${currentBook.author.wiltb}`;

  authorPicture.innerHTML = `
    <img src = "${currentBook.author.img}">
    <div class="author-picture-overlay"></div>

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
   upNextBookInfoOverlay.classList.remove("show");

   authorName2.textContent = upNextBook.author.name;
   authorAge2.textContent = upNextBook.author.age;
   authorNationality2.textContent = upNextBook.author.nationality;
   authorGenre2.textContent = upNextBook.author.genre;
   wiltb2.textContent = upNextBook.author.wiltb;

   authorPicture2.innerHTML = `
   
   <img src = "${upNextBook.author.img}">
    <div class="author-picture-overlay"></div>

   `;
}

function addCompletedBooksToShelf(completedBooks){

  for(let i = 0; i < completedBooks.length; i++){
    const completedBook = completedBooks[i];

    let div = document.createElement("div"); 

    div.addEventListener('click', function(){
      showBookInfo3(completedBook); 
    });

    div.innerHTML = `
    
    <img src = "${completedBook.img}">

    
    `;

    bookShelf3.appendChild(div);
  }
}

function showBookInfo3(completedBook){
   bookInfo3.classList.add("show"); 
   completedBookInfoOverlay.classList.remove("show");


   authorName3.textContent = completedBook.author.name;
   authorAge3.textContent = `Age: ${completedBook.author.age}`;
   authorNationality3.textContent = `Nationality: ${completedBook.author.nationality}`;
   authorGenre3.textContent = completedBook.author.genre;
   wiltb3.textContent = completedBook.author.wiltb;

   authorPicture3.innerHTML = `
   
   <img src = "${completedBook.author.img}">
    <div class="author-picture-overlay"></div>
  
   `;
}




addCurrentBooksToShelf(currentBooks);
addNextBooksToShelf(upNextBooks);
addCompletedBooksToShelf(completedBooks);

