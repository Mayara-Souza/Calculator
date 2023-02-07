let showTyped = document.getElementById("typed");
let showResult = document.getElementById("aux-result");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let numberA;
let selectedOperator;
let numberB;
let aux=[];

numbers.forEach(number =>{
    number.addEventListener("click", ()=>{
        displayTyping(number);
    })
})

operators.forEach(operator =>{
    operator.addEventListener("click", ()=>{
        displayTyping(operator);
    })
})

function displayTyping(cliked){
    showTyped.innerText += cliked.value;

    if(cliked.classList.contains("number")){
        aux.push(cliked.value);
        console.log(aux);
    }

    if(cliked.classList.contains("operator")){
        if(cliked.value == "="){
            numberB = aux.join("");
            console.log("calculando...");
            calculate(numberA,selectedOperator, numberB);
        }else{
            selectedOperator = cliked.value;
            numberA = aux.join("");
            aux.length = 0;
            console.log("Operador: "+selectedOperator);
        }
    } 
}

function displayResult(result){
        showResult.innerText = result;
}

function calculate(firstNum, operator, secNum){
    firstNum = parseFloat(firstNum);
    secNum = parseFloat(secNum);
    switch(operator){
        case "+":
            result = (firstNum + secNum);
            result = result.toString();
            displayResult(result);
            break;
    }
}


function clearLastNUmber(){}
function clearAll(){}