// var trafficLight = prompt("Please enter colour", "RED")
// if (trafficLight == red){
//     alert("WAIT!")
// }else if(trafficLight == green){
//     alert("GO!")
// }else if(trafficLight == yellow){
//     alert("READY!")
// }else {
//     alert("Traffic System is faulty")
// }

let firstColour = document.getElementById("red");
firstColour.style.opacity = 0.4
let secondColour = document.getElementById("yellow");
secondColour.style.opacity = 0.4
let thirdColour = document.getElementById("green");
thirdColour.style.opacity = 0.4
let timeOut = 10;

function changeColour(){
    timeOut--;
    if(timeOut <8){
    // firstColour.innerHTML = timeOut;
    firstColour.style.opacity = 1;
    secondColour.style.opacity = 0.2
    thirdColour.style.opacity = 0.2
    trafficator();
    }}
   
    function trafficator(){
        if(timeOut < 5){
            secondColour.style.opacity = 1;
            firstColour.style.opacity = 0.2
            thirdColour.style.opacity = 0.2;
        }
    
        if(timeOut <3 ){
        clearInterval(callColour);
        thirdColour.style.opacity = 1;
        firstColour.style.opacity = 0.2;
        secondColour.style.opacity = 0.2;
         timeOut = 10;
         loop()

        }
    }
  

function loop(){
callColour = setInterval(changeColour, 1000);
}
loop();

// let colourInterval = setInterval(changeColour, 2000);

// let secondColour = document.getElementById("yellow");
// let colour2 = 20;

// function changeColour2(){
//     colour2--;
//     secondColour.style.background = colour;
//     if(colour2 === 10){
//         clearInterval(colourInterval2)
//     }
// }

// let colourInterval2 = setInterval(changeColour2, 1000);

// let thirdColour = document.getElementById("green");
// let colour3 = 30;

// function changeColour3(){
//     colour3--;
//     thirdColour.style.background = colour3;
//     if(colour3 === 20){
//         clearInterval(colourInterval3);
//     }
// }

// let colourInterval3 = setInterval(changeColour3, 1000);