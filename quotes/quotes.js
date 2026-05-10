let quotesContainer = document.getElementById("quotesContainer"); 

let quotes = [
  {
    quote: "Start where you are, Use what you have, Do what you can! - [Arthur Ashe]"
  },
  
  {
    quote: "The win is not in the size of the step. It's in the direction!"
  },
]; 

function addQuotesToPage(quotes){

  // loop over ech item in the array 

  for (let i = 0; i < quotes.length; i++) {

    let div = document.createElement("div");

    div.classList.add("quotes-container"); 

    const quote = quotes[i];

    div.innerHTML = `
    <div class="quote-child"> <p> ${quote.quote} </p> </div>
    
    `;


    quotesContainer.appendChild(div); 

  }
}


addQuotesToPage(quotes);