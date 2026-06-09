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
    title: 'The Ruthless Elimination of Hurry',
    img: './images/book-covers/treoh-johnOrtberg.jpg',

    author: {
      name: "John Mark Comer",
      age:  45,
      nationality: "American",
      genre: "Christian Nonfiction, Spiritual Formation",
      wiltb: "Teaching me how to take my time with many areas in my life in a world that is on a constant rush.",
      img: "./images/authors/johnmarkc-1.webp"
    },
    
  },

  {
    title: '',
    img: './images/book-covers/butHowDoItKnow-J.ClarkScott-1.jpg',
    author: {
      name: "J. Clark Scott",
      age: "61 (born April 6, 1964)",
      nationality: "American",
      genre: "Technology, Computer Science, Nonfiction",
      wiltb: "Explains how computers work in a very simple manner",
      img: "./images/authors/J.clarkScott-1.jpg"
    },
  },

  {
    title: '',
    img: './images/book-covers/despentes-vernonSubutex-1.avif',
    author: {
      name: "Virginie Despentes",
      age: "56 (born June 13, 1969)",
      nationality: "French",
      genre: "Literary Fiction, Social Commentary, Feminist Literature",
      wiltb: "Love the protrayal of the main charater and the chase for Alex's video recordings.",
      img: "./images/authors/virginieDespentes-1.webp"
    },    
  }
];


let upNextBooks = [
  {
    title: '',
    img: './images/book-covers/thinkAndGrowRich-1.jpg',
    author: {
      name: "Napoleon Hill",
      age:  "",
      nationality: "",
      genre: "",
      wiltb: "",
      img: "./images/authors/napoleon-hill-1.jpg"
    },
    
  },

  {
    title: '',
    img: './images/book-covers/cantHurtMe-1.jpg',
    author: {
      name: "David Goggins",
      age: "",
      nationality: "",
      genre: "",
      wiltb: "",
      img: "./images/authors/davidGoggins-1.webp"
    },
  },

  {
    title: '',
    img: './images/book-covers/deepWork-1.jpg',
    author: {
      name: "Cal Newport",
      age: "",
      nationality: "",
      genre: "",
      wiltb: "",
      img: "./images/authors/calNewport-1.jpg"
    },    
  },

];


let completedBooks = [
  {
    title: 'Let Them',
    img: './images/book-covers/letThem-melRobbins.jpg',
    author: {
      name: "Mel Robbins",
      age:  "57 (born October 6, 1968)",
      nationality: "American",
      genre: "Personal Development, Self-Help, Motivation",
      wiltb: "Really changed my perspective on how I should approach situations. Going from constantly worrying about what others think to just get letting them think what they want, and letting me do me.",
      img: "./images/authors/melRobbins-1.jpg"
    },
    
  },

  {
    title: 'And Then There Were None',
    img: './images/book-covers/attwn-agataChristie.jpg',
    author: {
      name: "Agatha Christie",
      age: "85: (September 15, 1890) - (January 12, 1976)",
      nationality: "English",
      genre: "Murder Mystery, Detective Fiction",
      wiltb: "Really enjoyed reading it. The development, the plot twists. Everything was aligned so perfectly and kept me hooked! One of my favorite fiction reads.",
      img: "./images/authors/agathaChristie-1.webp"
    },
  },

  {
    title: 'Atomic Habits',
    img: './images/book-covers/atomicHabits-jamesClear.jpg',
    author: {
      name: "James Clear",
      age: "40 (born January 22, 1986)",
      nationality: "American",
      genre: "Non-Fiction, Self-Help, Personal Development, Business & Money Management",
      wiltb: "Really showed me strategies for building/eliminating habits",
      img: "./images/authors/jamesClear-1.jpg"
    },    
  },

  {
    title: 'Vernon Subutex 1',
    img: './images/book-covers/vernonSubu1-1.jpg',
    author: {
      name: "Virginie Despentes",
      age: "56 (born June 13, 1969)",
      nationality: "French",
      genre: "Literary Fiction, Social Commentary, Feminist Literature",
      wiltb: "Vernon was an ineteresting character with a unique view on the world and his lack of purpose.",
      img: "./images/authors/virginieDespentes-2.webp"
    },    
  },

  {
    title: 'Project Hail Mary',
    img: './images/book-covers/projectHailMary-1.jpg',
    author: {
      name: "Andy Weir",
      age: "53 (born June 16, 1972)",
      nationality: "American",
      genre: "Hard Science Fiction",
      wiltb: "",
      img: "./images/authors/andyWeir-1.png"
    },    
  },

  {
    title: 'Rich Dad Poor Dad',
    img: './images/book-covers/richDadPoorDad-1.jpg',
    author: {
      name: "Robert T. Kiyosaki",
      age: "79 (born April 8, 1947)",
      nationality: "American",
      genre: "Businessman, Entrepreneur, Educator",
      wiltb: "",
      img: "./images/authors/robertTKiyosaki-1.avif"
    },    
  },

  {
    title: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    img: './images/book-covers/ikagai-1.jpg',
    author: {
      name: "Hector Garcia & Francesc Miralles",
      age: "Hector: 45, Miralles: 57",
      nationality: "Garcia: Spanish & Japanese, Miralles: Spanish ",
      genre: "Non-Fiction, Self-Help, Personal Development",
      wiltb: "",
      img: "./images/authors/hectorGarcia-frencescMiralles-1.jpg"
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
   authorGenre3.textContent = `Genre: ${completedBook.author.genre}`;
   wiltb3.textContent = completedBook.author.wiltb;

   authorPicture3.innerHTML = `
   
   <img src = "${completedBook.author.img}">
    <div class="author-picture-overlay"></div>
  
   `;
}




addCurrentBooksToShelf(currentBooks);
addNextBooksToShelf(upNextBooks);
addCompletedBooksToShelf(completedBooks);

