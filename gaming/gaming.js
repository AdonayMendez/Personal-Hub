const gamesContainer = document.getElementById("gamesContainer"); 
const wantListGames = document.getElementById("wantListGames"); 

const games = [
  {
    title: "Cod Mobile" ,
    num: 1
  },

  {
    title: "Real Flight Simulator",
    num: 2

  },

  {
    title: "112 Operator",
    num: 3
  },
];

const wantGames = [
  {
    title: "",
    num: 1
  },

  {
    title: "",
    num: 2
  },


  {
    title: "",
    num: 3
  },

  {
    title: "",
    num: 4
  },

    {
    title: "",
    num: 5
  }
];

function addGamesToPage(games){

  for (let i = 0; i < games.length; i++){

    let div = document.createElement("div"); 

    div.classList.add("game"); 

    const game = games[i]; 

    div.innerHTML = `
    <p>${game.num}</p>
    <h1>${game.title}</h1>
    `
    gamesContainer.appendChild(div);
  } 
}


function addWantListGamesToPage(wantGames) {

  for(let i=0; i < wantGames.length; i++) {

    let div = document.createElement("div");

    div.classList.add("wantList-games"); 

    const game = wantGames[i];

    div.innerHTML = 
    `
    <p>${game.num}</p>
    <h1>${game.title}</h1>
    `

    wantListGames.appendChild(div);
  }
}



addGamesToPage(games)
addWantListGamesToPage(wantGames);