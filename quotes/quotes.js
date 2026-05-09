let quotesContainer = document.getElementById("quotesContainer"); 

let quotes = [
  {id: 1, quote: "Start where you are, Use what you have, Do what you can!"},
  {id: 2, quote: "The win is not in the size of the step. It's in the direction!"},
]; 

function addQuotesToPage(quotes){

  // loop over ech item in the array 

  for (let i = 0; i < quotes.length; i++) {

    let div = document.createElement("div");

    div.classList.add(""); 

    const quote = quotes[i];

    div.innerHTML = `
      <h1> hello </h1>
    
    
    `;


    quotes.quotesContainer.appendChild(div); 

  }
}
