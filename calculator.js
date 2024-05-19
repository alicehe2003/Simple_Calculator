// select all buttons 
const leftBracket = document.querySelector("#leftBracket"); 
const rightBracket = document.querySelector("#rightBracket"); 
const mod = document.querySelector("#mod"); 
const AC = document.querySelector("#AC"); 
const seven = document.querySelector("#seven"); 
const eight = document.querySelector("#eight"); 
const nine = document.querySelector("#nine"); 
const div = document.querySelector("#div"); 
const four = document.querySelector("#four"); 
const five = document.querySelector("#five"); 
const six = document.querySelector("#six"); 
const mult = document.querySelector("#mult"); 
const one = document.querySelector("#one"); 
const two = document.querySelector("#two"); 
const three = document.querySelector("#three"); 
const minus = document.querySelector("#minus"); 
const zero = document.querySelector("#zero"); 
const dot = document.querySelector("#dot"); 
const equal = document.querySelector("#equal"); 
const plus = document.querySelector("#plus"); 

// select equation and result 
let equation = document.querySelector("#equation"); 
let str = ""; 
let result = document.querySelector("#result"); 

// each time a button is pressed, update and display equation 
// when = is pressed, calculate result from equation 
// when AC is pressed, reset equation 

leftBracket.addEventListener("click", updateEquation);
rightBracket.addEventListener("click", updateEquation);
mod.addEventListener("click", updateEquation);
AC.addEventListener("click", updateEquation);
seven.addEventListener("click", updateEquation);
eight.addEventListener("click", updateEquation);
nine.addEventListener("click", updateEquation);
div.addEventListener("click", updateEquation);
four.addEventListener("click", updateEquation);
five.addEventListener("click", updateEquation);
six.addEventListener("click", updateEquation);
mult.addEventListener("click", updateEquation);
one.addEventListener("click", updateEquation);
two.addEventListener("click", updateEquation);
three.addEventListener("click", updateEquation);
minus.addEventListener("click", updateEquation);
zero.addEventListener("click", updateEquation);
dot.addEventListener("click", updateEquation);
equal.addEventListener("click", updateEquation);
plus.addEventListener("click", updateEquation);

// updates equation depending on which button is pressed
function updateEquation(event) {
    const buttonClicked = event.target; 
    str += buttonClicked.textContent; 
    equation.textContent = str; 
}

