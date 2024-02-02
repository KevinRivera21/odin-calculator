let firstNumber;
let operator;
let secondNumber;

const display = document.querySelector(".display-container");

let numberButtons = document.querySelectorAll(".number-buttons");

numberButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        let buttonValue = button.textContent;
        updateDisplay(buttonValue);
    })
})

function updateDisplay(value) {
    display.textContent += value;
}

function add (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

console.log(add(10, 10));

function subtract (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

console.log(subtract(5, 10));

function multiply (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(10, 10));

function divide (firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

console.log(divide(0, 10));

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            return 'Invalid operator';
    }
    
}

// Test cases for the operator function
console.log("The sum of 10 and 5 is: " + operate(10, 5, '+')); // Expected output: 15
console.log("The difference of 10 and 5 is: " + operate(10, 5, '-')); // Expected output: 5
console.log("The product of 10 and 5 is: " + operate(10, 5, '*')); // Expected output: 50
console.log("The division of 10 and 5 is: " + operate(10, 5, '/')); // Expected output: 2
console.log(operate(10, 5, '%')); // Expected output: 'Invalid operator'
