// Get values
let format = [];
let second = false;
let numbers = [];
const btn = document.querySelectorAll(".number");
for (let a=0; a < 9; a++){
    btn[a].addEventListener("click", getvalue)
}

function getvalue(btn){
    const control = btn.target;
    const number = parseInt(control.id.replace("n", ""));
    format.push(number);
    showvalues();
}
// Print values
function showvalues(){
    const display = document.querySelector(".display");
    display.textContent = format.join('');
}
// Count
function count(a, b, o){
    switch (o){
        case `+`: return parseInt(a)+parseInt(b); break;
        case `-`: return parseInt(a)-parseInt(b); break;
        case `*`: return parseInt(a)*parseInt(b); break;
        case `/`: return parseInt(a)/parseInt(b); break;
    }
}
// operators
const operators = document.querySelectorAll(".operation");
function operation(button){
    numbers.push(format.join(''));
    numbers.push(button.target.id.replace("n", ""));
    format.length = 0;
    second = true;
}
for (let a of operators){
    a.addEventListener("click", operation);
}

//equals
const equal = document.querySelector(".equal");
equal.addEventListener("click", final)
function final(){
    numbers.push(format.join(''));
    let num = count(numbers[0], numbers[2], numbers[1]);
    numbers.length = 0

    numbers.push(num);
    format.length = 0

    format.push(num)
    second = false
    showvalues() 
}
// C
const c = document.querySelector(".c");
c.addEventListener("click",  reset)
function reset(){
    numbers.length = 0
    format.length = 0
    second = false;
    showvalues();
}
