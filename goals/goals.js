const goalsContainer = document.getElementById("goalsContainer"); 

//TODO: Name Goals + Optional: completion status 

let goals = [
  {
    // title: ""
  },

  {
    // title: ""
  },

  {
    // title: ""
  },

  {
    // title: ""
  },

  {
    // title: ""
  },

  {
    // title: ""
  },

  {
    // title: ""
  },

  {
    // title: ""
  }
];

function addGoalsToPage(goals) {

  for(let i=0; i < goals.length; ++i) {

    let div = document.createElement("div"); 

    div.classList.add("goals-row"); 

    const goal = goals[i]; 

    div.innerHTML = `<p>${goal.title}</p>`; 

    goalsContainer.appendChild(div);
  }
}

addGoalsToPage(goals);


