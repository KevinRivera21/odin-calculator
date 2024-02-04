let firstNumber = "";
let operator = "";
let secondNumber = "";
let storingFirstNumber = true;
let chainingOperations = false;
let temporaryNewNumber = 0;
let operatorJustPressed = false;

const display = document.querySelector(".display-container");

let numberButtons = document.querySelectorAll(".number-buttons");

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if the button is an operator
        if (["+", "-", "/", "*", "="].includes(button.textContent)) {
            if (secondNumber !== "" && operator !== "" && !operatorJustPressed) {
                updateDisplay(button);
                operate(firstNumber, secondNumber, operator);
            }

            if (button.textContent === "=" && firstNumber) {
                // Perform calculation
                operate(firstNumber, secondNumber, operator);

            } else if (operator === "" && button.textContent !== "=") { // If no operator has been set yet
                secondNumber = "";
                console.log("AFTER PRESSING THE SECOND OPERATOR THE FIRSTNUMBER IS NOW"+firstNumber)
                console.log(secondNumber);
                console.log("first number is"+firstNumber);
                operator = button.textContent;
                storingFirstNumber = false; // Start storing the second number
                updateDisplay(button); // Optional: Update display if you want to show the operator
            }
        } else if (button.textContent === "AC") {
            // Reset everything
            resetCalculator();
        } else {
            // It's a number button
            if (storingFirstNumber && !chainingOperations) {
                storeFirstNumber(button);
            } else {

                storeSecondNumber(button);
            }
            updateDisplay(button);
        }
    });
});

function resetCalculator() {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    storingFirstNumber = true;
    display.textContent = "";
}

function showResult(result) {
    
    let roundedResult = Number(result.toFixed(2));
    display.textContent = roundedResult;
}



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
    operator = "";
    return firstNumber + secondNumber;
};

function subtract(firstNumber, secondNumber) {
    operator = "";
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    operator = "";
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    operator = "";
    if (secondNumber == 0) {
        return "Division by zero is undefined"
    }
    return firstNumber / secondNumber;
}

function operate(firstNumb, secondNumb, operator) {
    firstNumber = parseInt(firstNumb);
    secondNumber = parseInt(secondNumb);
    
    switch (operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = subtract(firstNumber, secondNumber);
            break;
        case '*':
            result = multiply(firstNumber, secondNumber);
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            break;
        default:
            console.log('Invalid operator');
            return;
    }

    // Show and use the result for the next operation
    showResult(result);
    console.log(result);
    firstNumber = result;
    console.log("THE FIRST NUMBER IS NOW" + firstNumber);
     
}
