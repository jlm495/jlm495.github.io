//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

//var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
var storyText = "Joe was bored, so they decided to take :insertT: to :insertL:. While at :insertL:, Joe ran into an old friend from :insertP:, :insertF:. After a minute of catching up, they decide they should go catch the new :insertM: movie. So, they take :insertT: at a gasping :insertSpeed: to get to the :insertTime: showing on time, since it was :insertDistance: away. They :insertSuccess: to their movie. The movie was :insertSatisfaction:! Afterwards, Joe and :insertF: went their separate ways, :insertTalking:.";

//const insertX = ["Willy the Goblin","Big Daddy", "Father Christmas"];
//const insertY = ["the soup kitchen","Disneyland","the White House"];
//const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

const transportation = ["a walk", "their bike", "the bus", "their motorcycle", "their car", "their truck", "their Jeep", "their lawnmower", "their neighbor's space shuttle"];

const destination = ["the store", "the park", "the antique store", "GameStop", "the mountains", "Mars"];

const friend = ["Buzz Aldrin", "Gandalf", "Lara Croft", "Garrus", "Ulfric Stormcloak"];

const past = ["college", "high school", "work", "their childhood"];

const movie = ["Little Nicky", "Guardians of the Galaxy", "Twilight", "Spider-man", "Paranormal Activity"];

const speedUS = ["55 mph", "75 mph", "65 mph", "10 mph", "120 mph"];
const speedUK = ["90 kph", "105 kph", "120 kph", "16 kph", "190 kph"];

const time = ["9:00", "12:45", "4:00", "10:30", "11:00"];

const distanceUS = ["10 miles", "60 miles", "100 miles", "2 miles", "20 miles"];
const distanceUK = ["10 kilometers", "95 kilometers", "160 kilometers", "3 kilometers", "30 kilometers"];

const satisfaction = ["alright", "amazing", "horrible"];

const success = ["made it right on time", "were laughably late", "made it early"];

const talking = ["never to speak again", "and continued to keep in touch"];


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    
    var newStory = storyText;

    var tItem = randomValueFromArray(transportation);
    var dItem = randomValueFromArray(destination);
    var fItem = randomValueFromArray(friend); 
    var pItem = randomValueFromArray(past);
    var mItem = randomValueFromArray(movie);
    var timeItem = randomValueFromArray(time);
    var satItem = randomValueFromArray(satisfaction);
    var suItem = randomValueFromArray(success);
    var talkItem = randomValueFromArray(talking);

    newStory = newStory.replace(':insertT:', tItem);
    newStory = newStory.replace(':insertT:', tItem);

    newStory = newStory.replace(':insertL:', dItem);
    newStory = newStory.replace(':insertL:', dItem);
    
    newStory = newStory.replace(':insertP:', pItem);

    newStory = newStory.replace(':insertF:', fItem);
    newStory = newStory.replace(':insertF:', fItem);

    newStory = newStory.replace(':insertM:', mItem);
    newStory = newStory.replace(':insertTime:', timeItem);
    newStory = newStory.replace(':insertSatisfaction:', satItem);
    newStory = newStory.replace(':insertSuccess:', suItem);
    newStory = newStory.replace(':insertTalking:', talkItem);

    //var xItem = randomValueFromArray(insertX);
    //var yItem = randomValueFromArray(insertY);
    //var zItem = randomValueFromArray(insertZ);

    //newStory = newStory.replace(':insertx:', xItem);
    //newStory = newStory.replace(':insertx:', xItem);
    //newStory = newStory.replace(':inserty:', yItem);
    //newStory = newStory.replace(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Joe', name);
    newStory = newStory.replace('Joe', name);
    newStory = newStory.replace('Joe', name);


  }

  if(document.getElementById("uk").checked) {
    
    var speedItem = randomValueFromArray(speedUK);
    var distItem = randomValueFromArray(distanceUK);
    
    //const weight = Math.round(21.4286);
    //var weightString = weight + ' stones';
    //const temperature =  Math.round(34.4444);
    //var temperatureString = temperature + ' centigrade';

    newStory = newStory.replace(':insertSpeed:', speedItem);
    newStory = newStory.replace(':insertDistance:', distItem);

  }

  if(document.getElementById("us").checked){

    var speedItem = randomValueFromArray(speedUS);
    var distItem = randomValueFromArray(distanceUS);

    newStory = newStory.replace(':insertSpeed:', speedItem);
    newStory = newStory.replace(':insertDistance:', distItem);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}


