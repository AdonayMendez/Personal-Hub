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


//? Current Books Array 

let currentBooks = [
  {
    title: 'The Ruthless Elimination of Hurry',
    img: './images/book-covers/treoh-johnOrtberg.jpg',

    author: {
      name: "John Mark Comer",
      age:  '45 (born June 10, 1980)',
      nationality: "American",
      genre: "Christian Nonfiction, Spiritual Formation",
      wiltb: "Teaching me how to take my time with many areas in my life in a world that is on a constant rush.",
      img: "./images/authors/johnmarkc-1.webp"
    },
    
  },

  {
    title: 'But How Do It Know',
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

//? Up Next Books Array

let upNextBooks = [
    {
    title: '',
    img: './images/book-covers/deepWork-1.jpg',
    author: {
      name: "Cal Newport",
      age: "43 (Born June 23, 1982)",
      nationality: "American",
      genre: "Productivity, Self-Help, Personal Development",
      wiltb: "",
      img: "./images/authors/calNewport-1.jpg"
    },    
  },

  {
    title: '',
    img: './images/book-covers/cantHurtMe-1.jpg',
    author: {
      name: "David Goggins",
      age: "51 (Born February 17, 1975)",
      nationality: "American",
      genre: "Memoir, Self-Help, Motivation",
      wiltb: "",
      img: "./images/authors/davidGoggins-1.webp"
    },
  },


  {
    title: '',
    img: './images/book-covers/thinkAndGrowRich-1.jpg',
    author: {
      name: "Napoleon Hill",
      age: "87 (Born October 26, 1883 – Died November 8, 1970)",
      nationality: "American",
      genre: "Self-Help, Personal Success, Personal Finance",
      wiltb: "",
      img: "./images/authors/napoleon-hill-1.jpg"
    },
    
  },

];

//? Completed Books Array

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

  {
    title: 'The Four Agreements',
    img: './images/book-covers/theFourAgreemnets-1.jpg',
    author: {
      name: "Don Miguel Ruiz",
      age: "72 (Born August 27, 1952)",
      nationality: "Mexican",
      genre: "Self-Help, Spirituality, Personal Development",
      wiltb: "",
      img: "./images/authors/Don_Miguel_Ruiz-1.jpg"
    },    
  },

  {
    title: 'Frankenstein',
    img: './images/book-covers/frankenstein-1.jpg',
    author: {
      name: "Mary Shelley",
      age: "53 (Born August 30, 1797 - Died February 1, 1851)",
      nationality: "English",
      genre: "Gothic Fiction, Science Fiction, Romanticism",
      wiltb: "",
      img: "./images/authors/Mary_Shelley-1.jpg"
    },    
  },

  {
    title: 'The Jungle',
    img: './images/book-covers/theJungle-1.webp',
    author: {
      name: "Upton Sinclair",
      age: "90 (Born September 20, 1878 – Died November 25, 1968)",
      nationality: "American",
      genre: "Muckraking, Social Criticism, Political Fiction",
      wiltb: "",
      img: "./images/authors/Upton_Sinclair-1.jpg"
    },    
  },

  {
    title: 'Change',
    img: './images/book-covers/change-1.webp',
    author: {
      name: "Édouard Louis",
      age: "33 (Born October 30, 1992)",
      nationality: "French",
      genre: "Autobiographical Fiction, Memoir, Social Criticism",
      wiltb: "",
      img: "./images/authors/Edouard_Louis-1.jpg"
    },    
  },

  
  {
    title: 'The Stranger',
    img: './images/book-covers/theStanger-1.jpg',
    author: {
      name: "Albert Camus",
      age: "46 (Born November 7, 1913 – Died January 4, 1960)",
      nationality: "French-Algerian",
      genre: "Philosophical Fiction, Existentialism, Absurdism",
      wiltb: "",
      img: "./images/authors/Albert_Camus-1.webp"
    },    
  },

     {
    title: 'The Meursault Investigation',
    img: './images/book-covers/theMeursaultInvestigation-1.jpg',
    author: {
      name: "Kamel Daoud",
      age: "55 (Born June 17, 1970)",
      nationality: "Algerian",
      genre: "Literary Fiction, Journalism, Political Commentary",
      wiltb: "",
      img: "./images/authors/Kamel_Daoud-1.avif"
    },    
  },

  {
    title: 'Black Bazaar',
    img: './images/book-covers/blackBazaar-1.jpg',
    author: {
      name: "Alain Mabanckou",
      age: "59 (Born February 24, 1966)",
      nationality: "Republic of the Congo",
      genre: "Literary Fiction, Satire, Postcolonial Literature",
      wiltb: "",
      img: "./images/authors/Alain_Mabanckou-1.jpg"
    },    
  },
];


//! Functions 

//* function to add the currentBooks array to the bookShelf 
//  for loop to create a div element for each object in the array

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
};

//* function that when called adds the class show to bookInfo to display author information
// Removes the class show for the default message ("Click here to learn about the author")
// Gives corresponding text from array to html p elements with an id

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

};

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
};

function showBookInfo2(upNextBook){
   bookInfo2.classList.add("show"); 
   upNextBookInfoOverlay.classList.remove("show");

   authorName2.textContent = upNextBook.author.name;
   authorAge2.textContent = `Age: ${upNextBook.author.age}`;
   authorNationality2.textContent = `Nationality: ${upNextBook.author.nationality}`;
   authorGenre2.textContent = `Genre: ${upNextBook.author.genre}`;
   wiltb2.textContent = upNextBook.author.wiltb;

   authorPicture2.innerHTML = `
   
   <img src = "${upNextBook.author.img}">
    <div class="author-picture-overlay"></div>

   `;
};

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
};

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
};

addCurrentBooksToShelf(currentBooks);
addNextBooksToShelf(upNextBooks);
addCompletedBooksToShelf(completedBooks);

