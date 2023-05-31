const button1 = document.querySelector("#button1");
const button1Listener = button1.addEventListener('click', outFunction1);

let number = 1;

function outFunction1(){

    number = number + 1;

    //original

    if (number%2==0){

        document.getElementById('orange-planet').src="../wa/wa7/planet.png";
        document.getElementById('purple-planet').src="../img/purple-planet.png";
        document.getElementById('ring-planet').src="../img/planet-ring.png";
        document.getElementById('blue-planet').src="../img/blue-planet.png";

    }

    // swapped
    else{

        document.getElementById("orange-planet").src="../img/purple-planet.png";
        document.getElementById('purple-planet').src="../wa/wa7/planet.png";
        document.getElementById('ring-planet').src="../img/blue-planet.png";
        document.getElementById('blue-planet').src="../img/planet-ring.png";

    }

    
    console.log("planets changed");

}

const button2 = document.querySelector("#button2");
const button2Listener = button2.addEventListener('click', outFunction2);

let number2 = 1;

function outFunction2(){

    number2 = number2 + 1;
    if (number2%2==0){

        var element = document.getElementById("header");
        element.style.fontFamily = "monospace";
    }

    else{

        var element = document.getElementById("header");
        element.style.fontFamily = "fantasy";
    }
    console.log("title changed");
}