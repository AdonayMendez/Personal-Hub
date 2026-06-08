const gamesContainer = document.getElementById("gamesContainer"); 
const wantListGames = document.getElementById("wantListGames"); 
const imgOverlay = document.getElementById("imgOverlay"); 
const modalOverlay = document.getElementById("modal-overlay"); 
const descriptionText = document.getElementById("descriptionText"); 
const closeBtn = document.getElementById("closeBtn"); 



const games = [
  {
    title: "Cod Mobile" ,
    imgSrc: "./images/codMobile-1.jpg",
    description: "Love playing Cod Mobile. It's the game I have spent the most hours on. Just know, Im a PRO!!"
  },

  {
    title: "War Robots",
    imgSrc: "./images/warRobots-1.jpg", 
    description: "Pay to win like crazy. Second most hours I have on a game. I have already spent 200+ dollars on it... I must stop!!" 
    

  },

  {
    title: "112 Operator",
    imgSrc: "./images/112-operator-1.jpg",
    description: "Love a game where I can command emergency units to help people in danger" 

    
  },

 { 
    title: "Real Flight Simulator",
    imgSrc: "./images/rfs-1.jpg",
    description: "Favorite plane game. In a VA currently filled with a wonderful community" 
    
  },
];

const wantGames = [
  {
    title: "Factorio",
    imgSrc: "./images/factorio-1.jpg",
    description: "The Factory Must Grow!"
  },

  {
    title: "Running Train",
    imgSrc: "./images/runningTrain-1.jpg",
    description: "The peacefulness of being a train driver. I always loved train games"


  },


  {
    title: "Forza Horizon 6",
    imgSrc: "./images/forzaHorizon6-1.jpg",
    description: "Might be a while before I am able to play this game :("

  }
];

function addGamesToPage(games){

  for (let i = 0; i < games.length; i++){

    let div = document.createElement("div"); 

    div.classList.add("game"); 

    const game = games[i]; 

    div.addEventListener('click', function(){
      showGameDescription(game);
    })

    div.innerHTML = `
    <div class="img-overlay"></div>
    <img src=${game.imgSrc}>

    `;
    gamesContainer.appendChild(div);
  } 
}


function addWantListGamesToPage(wantGames) {

  for(let i=0; i < wantGames.length; i++) {

    let div = document.createElement("div");

    div.classList.add("wantList-games"); 

    const wantGame = wantGames[i];

    div.addEventListener('click', function(){
      showWantGamesDescription(wantGame);
    })


    div.innerHTML = 
    `
    <div class="img-overlay" id="imgOverlay"></div>
    <img src=${wantGame.imgSrc}>
   
    `;

    wantListGames.appendChild(div);
  }
}


function showGameDescription(game){
  modalOverlay.classList.add("show");
  

  descriptionText.textContent = game.description;
}

function showWantGamesDescription(wantGame){
  modalOverlay.classList.add("show");

  descriptionText.textContent = wantGame.description;


}



function closeModal(){
  modalOverlay.classList.remove("show");
}

closeBtn.addEventListener('click', function(){
  closeModal();
});

modalOverlay.addEventListener('click', function(event){
  
  if(event.target === modalOverlay){
     
    closeModal();
  } 
});


document.addEventListener('keydown', function(event){
  
  if(event.key === "Escape"){
     
    closeModal();
  } 
});






addGamesToPage(games);
addWantListGamesToPage(wantGames);