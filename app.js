const calculator = document.querySelector(".calculator")
const display = calculator.querySelector(".display p")
const numbers = document.querySelectorAll(".calculator .number")
const symbols = document.querySelectorAll(".calculator .symbol")
let values = [" ", " "]
let operation = ""
let errorFlag = false
let step = false

//Event listener for number 1-9, brackets and the dot
numbers.forEach(number => {
    number.addEventListener('click', () => {

        if (display.innerText.length > 11) {
            alert("Lenght of 12 numbers is a maximum!")
        } else {
            display.innerText += number.innerText
        }
    })

})

//Event listener for symbols +,-,/,*,=
symbols.forEach(symbol => {
    symbol.addEventListener('click', () => {
        switch (symbol.innerText) {
            case '+':
                if (step === true) {
                    values[1] = display.innerText
                    operate(operation, values[0], values[1])
                }
                operation = symbol.innerText
                values[0] = display.innerText
                display.innerHTML = ""
                step = true
                break;
            case '−':
                if (step === true) {
                    values[1] = display.innerText
                    operate(operation, values[0], values[1])
                }
                operation = symbol.innerText
                values[0] = display.innerText
                display.innerHTML = ""
                step = true
                break;
            case '×':
                if (step === true) {
                    values[1] = display.innerText
                    operate(operation, values[0], values[1])
                }
                operation = symbol.innerText
                values[0] = display.innerText
                display.innerHTML = ""
                step = true
                break;
            case '/':
                if (step === true) {
                    values[1] = display.innerText
                    operate(operation, values[0], values[1])
                }
                operation = symbol.innerText
                values[0] = display.innerText
                display.innerHTML = ""
                step = true
                break;
            case '=':
                values[1] = display.innerText
                operate(operation, values[0], values[1])
                step = false
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

//operations functions
function add(number1, number2) {
    let sum = parseFloat(number1) + parseFloat(number2)
    values[0] = sum
    display.innerText = sum
}

function substract(number1, number2) {
    let sum = parseFloat(number1) - parseFloat(number2)
    values[0] = sum
    display.innerText = sum
}

function multiply(number1, number2) {
    let sum = parseFloat(number1) * parseFloat(number2)
    values[0] = sum
    display.innerText = sum
}

function divide(number1, number2) {
    if (parseFloat(number2) == 0) {
        alert("You cannot delete by zero! Your calculator has been cleared.")
        errorFlag = true
    } else {
        let sum = parseFloat(number1) / parseFloat(number2)
        values[0] = sum
        display.innerText = sum
    }
}

//Main function which handles operation
function operate(operator, number1, number2) {
    let dotAmount1 = number1.split('.').length - 1
    let dotAmount2 = number2.split('.').length - 1

    if (dotAmount1 > 1) {
        alert("Too many dots in first operator! Your calculator has been cleared.")
        errorFlag = true
    } else if (dotAmount2 > 1) {
        alert("Too many dots in second operator! Your calculator has been cleared.")
        errorFlag = true
    }


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

    if (display.innerText.length > 11 && dotAmount1 > 1) {
        display.innerText = round(parseFloat(display.innerText))
    } else if (display.innerText.length > 11 && dotAmount1 < 1) {
        display.innerText = exp(parseFloat(display.innerText))
    }

    if (errorFlag == true) {
        clear()
    }


}

//clear function which resets the whole calculator
function clear() {
    display.innerHTML = ""
    operation = ""
    values = []
    errorFlag = false
}

//deleting one character
function del() {
    display.innerText = display.innerText.slice(0, -1)
}

function round(number) {
    return number.toFixed(4);
}

function exp(number) {
    return number.toExponential(4);
}