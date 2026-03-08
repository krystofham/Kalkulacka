// Get values
let format = [];
let second = false;
let numbers = [];
let minus = false;
const btn = document.querySelectorAll(".number");
for (let a=0; a < 10; a++){
    btn[a].addEventListener("click", getvalue)
}

function getvalue(btn){
    const control = btn.target;
    let number = parseInt(control.id.replace("n", ""));
    if (minus) {
        number*=-1;
    }
    format.push(number);
    minus = false;

    showvalues();
    if (second){
        final()
    }
}
//minus
const minusbutton = document.querySelector(".minus");
minusbutton.addEventListener("click", function () {minus = true});
//dot

// Print values
function showvalues(){
    const display = document.querySelector(".display");
    display.textContent = format.join('');
}

// Count
function count(a, b, o){
    switch (o){
        case `+`: return parseFloat(a)+parseFloat(b); break;
        case `-`: return parseFloat(a)-parseFloat(b); break;
        case `*`: return (parseFloat(a)*parseFloat(b)).toFixed(2); break;
        case `/`: return (parseFloat(a)/parseFloat(b)).toFixed(2); break;
    }
}
// operators
const operators = document.querySelectorAll(".operation");
function operation(button){
    numbers.push(format.join(''));
    numbers.push(button.target.id.replace("n", ""));
    format.length = 0;
    second = true;
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
    second = true;
    console.log(numbers, format)
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
