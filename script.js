// Get values
let format = [];
let numbers = [];
let second = true;
const btn = document.querySelectorAll(".number");
for (let a=0; a < 10; a++){
    btn[a].addEventListener("click", getvalue)
}

function getvalue(btn){
    const control = btn.target;
    let number = parseInt(control.id.replace("n", ""));
    format.push(number);
    showvalues();
}
// delete
const del = document.querySelector(".delete");
del.addEventListener("click", function () {format.pop(0); showvalues();});
//dot
const dotbutton = document.querySelector(".dot");
dotbutton.addEventListener("click", function () {
    if (!format.includes(".")) { 
        format.push(".");
        showvalues();
    }
});
// Print values
function showvalues(){
    const display = document.querySelector(".display");
    display.textContent = format.join('');
}

// Count
const equal = document.querySelector(".equal");
equal.addEventListener("click", final)

function count(a, b, o){
    switch (o){
        case `+`: return parseFloat((parseFloat(a)+parseFloat(b)).toFixed(4)); break;
        case `-`: return parseFloat((parseFloat(a)-parseFloat(b)).toFixed(4)); break;
        case `*`: return parseFloat((parseFloat(a)*parseFloat(b)).toFixed(4)); break;
        case `/`: return parseFloat((parseFloat(a)/parseFloat(b)).toFixed(4)); break;
    }
}
// operators
const operators = document.querySelectorAll(".operation");
function operation(button){
    numbers.push(format.join(''));
    numbers.push(button.target.id.replace("n", ""));
    format.length = 0;
    console.log(numbers, format)
}
for (let a of operators){
    a.addEventListener("click", operation);
}

//equals
function final(){
    numbers.push(format.join(''));
    let num = count(numbers[0], numbers[2], numbers[1]);
    reset();
    format.push(num);
    console.log(numbers, format, num)
    showvalues()
}
// C
const c = document.querySelector(".c");
c.addEventListener("click",  reset)
function reset(){
    numbers.length = 0
    format.length = 0
    showvalues();
}
