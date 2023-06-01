const quoteButton = document.querySelector("#js-new-quote");
const answerButton = document.querySelector("#js-tweet");
const categoryButton = document.querySelector("#js-category");

const quoteButtonListener = quoteButton.addEventListener('click', getQuote);
const answerButtonListener = answerButton.addEventListener('click', showAnswer); 
const categoryButtonListener = categoryButton.addEventListener('click', changeCategory);


var API = "https://opentdb.com/api.php?amount=1&category=17";

const writeQuote = document.getElementById("js-quote-text");
const writeAnswer = document.getElementById("js-answer-text");

let check = 0;

writeQuote.textContent = getQuote();

async function getQuote(){

    console.log("Quote function entered successfully");

    const response = await fetch(API);
    const quote = await response.json();

    if(response){

        console.log(quote);
        displayQuote(quote);
        writeAnswer.style.visibility = 'hidden';
        displayAnswer(quote);

    }

   else{

    console.log("fetch failed");
    alert("fetch failed");
   }


}

function displayQuote(quote){

    quote.results[0].question = quote.results[0].question.replace('&#039;', "'");
    quote.results[0].question = quote.results[0].question.replace('&#039;', "'");
    quote.results[0].question = quote.results[0].question.replace('&#039;', "'");
    quote.results[0].question = quote.results[0].question.replace('&#039;', "'");
    quote.results[0].question = quote.results[0].question.replace('&#039;', "'");
    quote.results[0].question = quote.results[0].question.replace('&quot;', "''");
    quote.results[0].question = quote.results[0].question.replace('&quot;', "''");
    quote.results[0].question = quote.results[0].question.replace('&quot;', "''");
    quote.results[0].question = quote.results[0].question.replace('&quot;', "''");
    quote.results[0].question = quote.results[0].question.replace('&quot;', "''");
    quote.results[0].question = quote.results[0].question.replace('&quot;', "''");
    quote.results[0].question = quote.results[0].question.replace('&rsquo;', "'");

    writeQuote.textContent = quote.results[0].question;
}

function displayAnswer(quote){

    writeAnswer.textContent = quote.results[0].correct_answer;
}

function showAnswer(){

    writeAnswer.style.visibility = 'visible';
}

function changeCategory(){

    check = check + 1;

    if (check%2==0){

        document.querySelector("html").style.background = 'url("/wa/wa7/stars.jpeg")';
        API = "https://opentdb.com/api.php?amount=1&category=17";
        document.querySelector("#js-category").style.background = 'red';
        document.querySelector(".app").style.boxShadow = '5px 5px 5px purple';
        document.querySelector("#js-category").textContent = "Switch to music trivia!";
        document.querySelector("header").textContent = "Science Trivia";
        writeQuote.textContent = getQuote();


    }
    else{

        API = "https://opentdb.com/api.php?amount=1&category=12";
        document.querySelector("html").style.background = 'url("/img/music.jpg")';
        document.querySelector(".app").style.boxShadow = '5px 5px 5px lightgreen';
        document.querySelector("#js-category").style.background = 'black';
        document.querySelector("#js-category").textContent = "Switch to science trivia!";
        document.querySelector("header").textContent = "Music Trivia";
        writeQuote.textContent = getQuote();
    }
}