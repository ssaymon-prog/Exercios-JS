let display = document.getElementById("display")
let currentinput = " "
let currentoperator = ""


function appendNumber(value){
    currentinput += value
    display.textContent = currentinput
}

function appendOperator(operator){
    if(currentinput === "" && operator !== "." )return
    currentinput += operator
    display.textContent = currentinput
}

function calculate(){
    try {
        let result = eval(currentinput)
        if(!Number.isInteger(result)){
        result = ReadableStreamDefaultReader.tofixed(2)
    }
    currentinput = result
    display.textContent = currentinput
    }catch(error){
        displat.textContent = "ERRO"
        currentinput = ""
    }
}

function clearDisplay(){
    currentinput = ""
    display.textContent = currentinput
}