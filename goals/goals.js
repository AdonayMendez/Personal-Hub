const goalsContainer = document.getElementById("goalsContainer"); 

//TODO: Add Completion Status + Comment + Shawdow

const goals = [ 
  
  {
    title: "Exercise"
  },

  {
    title: "Exercise"
  },


  {
    title: "Exercise"
  }
]; 


function addGoalsToPage(goals) {

  for (let i=0; i < goals.length; i++) {

    const div = document.createElement("div"); 

    div.classList.add("goals-row"); 

    const goal = goals[i];

    div.innerHTML = `<p>${goal.title}</p>`

    goalsContainer.appendChild(div); 
  }
}

addGoalsToPage(goals);

