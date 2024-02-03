let firstNumber = "";
let operator = "";
let secondNumber = "";
let storingFirstNumber = true;

const display = document.querySelector(".display-container");

let numberButtons = document.querySelectorAll(".number-buttons");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if the button is an operator
        if (["+", "-", "/", "*", "="].includes(button.textContent)) {
            if (button.textContent === "=") {
                // Perform calculation
                performCalculation();

            } else if (operator === "") { // If no operator has been set yet
                operator = button.textContent;
                storingFirstNumber = false; // Start storing the second number
                updateDisplay(button); // Optional: Update display if you want to show the operator
            }
        } else if (button.textContent === "AC") {
            // Reset everything
            resetCalculator();
        } else {
            // It's a number button
            if (storingFirstNumber) {
                storeFirstNumber(button);
            } else {
                storeSecondNumber(button);
            }
            updateDisplay(button);
        }
    });
});

function updateDisplay(button) {
    let buttonValue = button.textContent;
    display.textContent += buttonValue;
}

function storeFirstNumber(button) {
    firstNumber += button.textContent;
    console.log("First number is: " + firstNumber);
}

function storeSecondNumber(button) {
    secondNumber += button.textContent;
    console.log("secondNumber is : " + secondNumber);
}

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

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
