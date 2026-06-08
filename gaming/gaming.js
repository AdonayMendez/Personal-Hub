const gamesContainer = document.getElementById("gamesContainer"); 
const wantListGames = document.getElementById("wantListGames"); 

const games = [
  {
    title: "Cod Mobile" ,
    imgSrc: "./images/codMobile-1.jpg"
  },

  {
    title: "Real Flight Simulator",
    imgSrc: "./images/warRobots-1.jpg"
    

  },

  {
    title: "112 Operator",
    imgSrc: "./images/112-operator-1.jpg"
    
  },

 { 
    title: "112 Operator",
    imgSrc: "./images/rfs-1.jpg"
    
  },
];

const wantGames = [
  {
    title: "",
    imgSrc: "./images/factorio-1.jpg"
  },

  {
    title: "",
    imgSrc: "./images/runningTrain-1.jpg"

  },


  {
    title: "",
    imgSrc: "./images/forzaHorizon6-1.jpg"
  }
];

function addGamesToPage(games){

  for (let i = 0; i < games.length; i++){

    let div = document.createElement("div"); 

    div.classList.add("game"); 

    const game = games[i]; 

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

    div.innerHTML = 
    `
    <div class="img-overlay"></div>
    <img src=${wantGame.imgSrc}>
   
    `;

    wantListGames.appendChild(div);
  }
}



addGamesToPage(games);
addWantListGamesToPage(wantGames);