let showTyped = document.getElementById("typed");
let showResult = document.getElementById("aux-result");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clearOptions = document.querySelectorAll(".letter-options");
let numberA;
let selectedOperator;
let numberB;
let aux = [];

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
    if(cliked.classList.contains("number")){
        aux.push(cliked.value);
        showTyped.innerText += cliked.value;
    }

    if((cliked.classList.contains("operator")) 
        && (!cliked.classList.contains("letter-options"))){
        if(cliked.value == "="){
            numberB = aux.join("");
            showTyped.innerText += cliked.value;
            console.log("calculando...");
            calculate(numberA,selectedOperator, numberB);
        }else{
            selectedOperator = cliked.value;
            numberA = aux.join("");
            aux.length = 0;
            showTyped.innerText += cliked.value;
            console.log("Operador: "+selectedOperator);
        }
    } 

    if(cliked.classList.contains("letter-options")){
        let option = cliked.value;

        if(option == "c"){
            clearAll();
        }
        if(option == "ce"){
            clearLast();
        }
    }
    console.log(aux);
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

function clearLast(){
        aux.pop();
        let NewAux = aux.join("");
        console.log(NewAux);
        showTyped.innerHTML = NewAux;
}

function clearAll(){
    aux = aux.slice(aux.length, -1);
    showTyped.innerHTML = aux; 
}