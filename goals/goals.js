const goalsContainer = document.getElementById("goalsContainer"); 
const modal = document.getElementById("modal");
// const modalTitle = document.getElementById("title");
const currentFocus = document.getElementById("focus");
const goalDescription = document.getElementById("goalDescription");
const futureGoals = document.getElementById("futureGoals");

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn")

//TODO: Name Goals + Optional: completion status 

let goals = [
  {
    title: "Programming",
    focus: '- Front End Development',
    goal: '- Finish MyHub Version 1',
    future: ' - Git / GitHub Fundamentals'
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
    
    div.addEventListener("click", function(){
      openModal(goal);
    });

    goalsContainer.appendChild(div);
  }
}

addGoalsToPage(goals);







// pass information from the goals array to the function
// declared as goal due to const goal = goals[i]; 
// The loop holds the goals info ehere it will be used
function openModal(goal){
  currentFocus.textContent = goal.focus; 
  goalDescription.textContent = goal.goal;
  futureGoals.textContent = goal.future;
  modal.classList.add("show");
}

function closeModal(){
  modal.classList.remove("show"); 
}

closeBtn.addEventListener("click", closeModal);


  // if the user clicks on the modal overlay

modal.addEventListener("click", function(e){
  if(e.target === modal){
    closeModal();
  }
});

// if the user presses down on the Esc key

document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    closeModal();
  }
});


