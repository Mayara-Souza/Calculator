let typed = document.getElementById("typed");
let result = document.getElementById("aux-result");
let buttons = document.querySelectorAll(".button")
let numberA;
let operation;
let numberB;
let aux; 

buttons.forEach(button =>{
    button.addEventListener("click", ()=>{
       updateDisplay(button);
    })
})

function updateDisplay(button){
    if(!button.classList.contains("operator")){
        typed.innerText += button.value;
        aux = typed.textContent;
        console.log(typed.textContent);
    }else{
        numberA = aux;
        aux = 0;
        operation = button.value;
        console.log("operador selecionado: "+operation);
    }
}

function calculate(){}
function clearLastNUmber(){}
function clearAll(){}