// Get values
let format = [];
const btn = document.querySelectorAll("#number");
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
    const display = document.querySelector("display");
    display.textContent = format.join('');
}
// Count
function count(a, b, o){
    switch (o){
        case `+`: return a+b; break;
        case `-`: return a-b; break;
        case `*`: return a*b; break;
        case `/`: return a/b; break;
    }
}