const goalsContainer = document.getElementById("goalsContainer"); 
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("title");
const modalDescription = document.getElementById("description");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn")

//TODO: Name Goals + Optional: completion status 

let goals = [
  {
    title: "Programming",
    description: "Hi"
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


function openModal(goal){
  modalTitle.textContent = goal.title; 
  modalDescription.textContent = goal.description;
  modal.classList.add("show");
}

function closeModal(goal){
  modal.classList.remove("show"); 
}

closeBtn.addEventListener("click", closeModal);


modal.addEventListener("click", function(e){
  if(e.target === modal){
    closeModal();
  }
});

document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){
    closeModal();
  }
});


