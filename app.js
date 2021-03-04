function add(number1, number2) {
    let sum = number1 + number2;
    console.log(sum)
}

function substract(number1, number2) {
    let sum = number1 - number2;
    console.log(sum)
}

function multiply(number1, number2) {
    let sum = number1 * number2;
    console.log(sum)
}

function divide(number1, number2) {
    let sum = number1 / number2;
    console.log(sum)
}


function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            add(number1, number2)
            break;
        case '-':
            substract(number1, number2)
            break;
        case '*':
            multiply(number1, number2)
            break;
        case '/':
            divide(number1, number2)
            break;
    }
}