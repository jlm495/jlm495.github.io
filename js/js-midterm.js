
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

class Number {
    constructor(color) {
      this.color = color;
    }

    draw() {
        
        document.getElementById("one").innerHTML = random(1,100);
        document.getElementById("two").innerHTML = random(1,100);
        document.getElementById("three").innerHTML = random(1,100);


    }
}

const numbers = [];

while (numbers.length < 25) {
    const number = new Number(
      'black',
    );
  
    numbers.push(number);
}

function loop() {
  
    for (const number of numbers) {
      number.draw();
    }
  
    requestAnimationFrame(loop);
}

loop();

let count = 0;

const forA = document.querySelector("#one");

forA.addEventListener("click", function() {
    
    num1 = random(8,15);
    document.querySelector("#a1").textContent = "(" + num1 + ")";
    document.querySelector("#a2").textContent = "(" + num1 + ")";
    count += 1;
});

const forB = document.querySelector("#two");

forB.addEventListener("click", function() {

    num2 = random(30,50);
    document.querySelector("#b1").textContent = "(" + num2 + ")";
    document.querySelector("#b2").textContent = "(" + num2 + ")";
    count += 1;
});

const forC = document.querySelector("#three");

forC.addEventListener("click", function() {
    
    num3 = random(1,15);
    document.querySelector("#c").textContent = "(" + num3 + ")";
    count += 1;
});

const volume = document.querySelector("#volume");

volume.addEventListener("click", function checkCount(){

    document.querySelector("#error").style.visibility = "hidden";
    
    if (count >= 3){

        const ans = 0 - ((-num2) * Math.sqrt((num2 * num2) - (4 * num1 * num3)))/(2 * num1);

        document.querySelector("#plus").textContent = "+ " + ans;
        document.querySelector("#minus").textContent = "- " + ans;

        document.querySelector("#choose").style.visibility = "visible";

    }

    else{

        document.querySelector("#error").style.visibility = "visible";
    }
});