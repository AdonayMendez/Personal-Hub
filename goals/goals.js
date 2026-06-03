const goalsContainer = document.getElementById("goalsContainer"); 
const modal = document.getElementById("modal");
// const modalTitle = document.getElementById("title");
const currentFocus = document.getElementById("currentFocus");
const goalDescription = document.getElementById("goalDescription");
const futureGoals = document.getElementById("futureGoals");

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn")

//TODO: Name Goals + Optional: completion status 

let goals = [
  {
    title: "Programming",
    focus: [ 
      'Front End Development',
    ],
    goal: [ 
   
      'Finish MyHub Version 1',
      'Complete JavaScript.info fundamentals',
    ],
    future: [ 
      'Git / GitHub Fundamentals',
      'npm',
      'Node.js'
    ]
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
  currentFocus.innerHTML = '';
  goalDescription.innerHTML = '';
  futureGoals.innerHTML = '';

  modal.classList.add("show");


  goal.focus.forEach(function(item){
    
    let p = document.createElement("p");

    p.textContent = `- ${item}`; 

    currentFocus.appendChild(p);

  });

  goal.goal.forEach(function(item) {
    
    let p = document.createElement("p");
    p.textContent = `- ${item}`; 

    goalDescription.appendChild(p);

  });
 
  //todo: practice forEach property
  goal.future.forEach(function(item) {
    let p = document.createElement("p");

    p.textContent = `- ${item}`;

    futureGoals.appendChild(p);
  });

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


