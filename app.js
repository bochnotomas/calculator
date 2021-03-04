const calculator = document.querySelector(".calculator")
const display = calculator.querySelector(".display p")
const numbers = document.querySelectorAll(".calculator .number")
const symbols = document.querySelectorAll(".calculator .symbol")
let values = []
let operation = ""



numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.innerText += number.innerText
    })
})

symbols.forEach(symbol => {
    symbol.addEventListener('click', () => {
        switch (symbol.innerText) {
            case '+':
                operation = symbol.innerText
                values.push(display.innerText)
                display.innerHTML = ""
                break;
            case '−':
                operation = symbol.innerText
                values.push(display.innerText)
                display.innerHTML = ""
                break;
            case '×':
                operation = symbol.innerText
                values.push(display.innerText)
                display.innerHTML = ""
                break;
            case '/':
                operation = symbol.innerText
                values.push(display.innerText)
                display.innerHTML = ""
                break;
            case '=':
                values.push(display.innerText)
                operate(operation, values[0], values[1])
                break;
            case '→':
                del()
                break;
            case 'C':
                clear()
                break;
        }
    })
})

function add(number1, number2) {
    let sum = parseFloat(number1) + parseFloat(number2)
    values[0] = sum
    values.pop()
    display.innerText = sum
}

function substract(number1, number2) {
    let sum = parseFloat(number1) - parseFloat(number2)
    values[0] = sum
    values.pop()
    display.innerText = sum
}

function multiply(number1, number2) {
    let sum = parseFloat(number1) * parseFloat(number2)
    values[0] = sum
    values.pop()
    display.innerText = sum
}

function divide(number1, number2) {
    let sum = parseFloat(number1) / parseFloat(number2)
    values[0] = sum
    values.pop()
    display.innerText = sum
}


function operate(operator, number1, number2) {
    console.log("----------")
    console.log(operator)
    console.log(number1)
    console.log(number2)
    console.log(values)
    switch (operator) {
        case '+':
            add(number1, number2)
            break;
        case '−':
            substract(number1, number2)
            break;
        case '×':
            multiply(number1, number2)
            break;
        case '/':
            divide(number1, number2)
            break;
    }
}


function clear() {
    display.innerHTML = ""
    operation = ""
    values = []
}


function del() {
    display.innerText = display.innerText.substring(1);
}

