/*
* Excercise 1
*
*/
const colorBlk = document.querySelector("#color-block");
const colorName = document.querySelector("#color-name");
const colorCodeOrig = colorName.textContent;
const colorCodeNew = '#1E81B0';
const convertBtn = document.querySelector("#convertbtn");
const fahrenheit = document.querySelector("#f-input");
const celsius = document.querySelector("#c-output");

/*
* Then write a function that changes the text and the color inside the div
*
*/
let clicked = false;
colorBlk.addEventListener("click", changeColor);

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(clicked){
        //change the background color using JS
        colorBlk.style.backgroundColor = colorCodeOrig;
        //Change the text of the color using the span id color-name
        colorName.textContent = colorCodeOrig;
        clicked = false;
    }
    else{
        //change the background color using JS
        colorBlk.style.backgroundColor = colorCodeNew;
        //Change the text of the color using the span id color-name
        colorName.textContent = colorCodeNew;
        clicked = true;
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
convertbtn.addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
function convertTemp(){
    //Calculate the temperature here
    let output = (fahrenheit.value - 32) * 5/9
    //Send the calculated temperature to HTML
    celsius.textContent = Math.round(output * 100) / 100;
}
