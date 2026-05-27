const goalsContainer = document.getElementById("goalsContainer"); 

const goals = [
  {
    goal: "Exercise"
  },
  
  {
    goal: "Exercise"
  },

  {
    goal: "Exercise"
  },

  {
    goal: "Exercise"
  },

  {
    goal: "Exercise"
  },

  {
    goal: "Exercise"
  },

  {
    goal: "Exercise"
  },

  {
    goal: "Exercise"
  },

];

// A function that when called upon will be added to the child of goalsContainer div in the html
function addGoalsToPage (goals) {

  // A for loop that will iterate through each array object individually starting at i = 0 for as long as it's less than the length of the array
    for (i=0; i < goals.length; i++) {

  // Assgining a created div element to the div variable 
    let div = document.createElement("div");
  
  // Adding a class name to the previously div variable
    div.classList.add("goals-row");

    // Assigns goal to the current object of the array objects of goals being proccessed
    const goal = goals[i]; 

    // To add HTML code the div varible created previously 
    // Applies to each object item individually
    div.innerHTML= `<p>${goal.goal}</p>`;


    goalsContainer.appendChild(div);

  }
}

addGoalsToPage(goals);


