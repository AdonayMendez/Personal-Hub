const goalsContainer = document.getElementById("goalsContainer"); 
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn")

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


function openModal() {
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
}

openBtn.addEventListener("click", openModal); 
closeBtn.addEventListener("click", closeModal);


// Close when clicking outside the modal box
openBtn.addEventListener("click", function(event) {
  if (event.target === modal){
  closeModal();
  }
});

// close when pressing Escape 

document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    closeModal();
  }
})