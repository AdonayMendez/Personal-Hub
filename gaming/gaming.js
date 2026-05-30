const gamesContainer = document.getElementById("gamesContainer"); 

const games = [
  {
    title: "" ,
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

    div.innerHTML = `<p>${game.num}</p>`

    gamesContainer.appendChild(div);
  }

}

addGamesToPage(games)