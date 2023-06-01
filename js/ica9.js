var quoteButton = document.querySelector("#js-new-quote");

const quoteButtonListener = quoteButton.addEventListener('click', getQuote);

const API = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

const writeQuote = document.getElementById("js-quote-text");

writeQuote.textContent = getQuote();

async function getQuote(){

    console.log("Quote function entered successfully");

    const response = await fetch(API);
    const quote = await response.json();

    if(response){

        console.log(quote);
        displayQuote(quote);

    }

   else{

    console.log("fetch failed");
    alert("fetch failed");
   }


}

function displayQuote(quote){

    writeQuote.textContent = quote.question;
}