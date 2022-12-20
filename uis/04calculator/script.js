let buttonPressed = '';
let screenDisplay = document.querySelector('.screen');
let result = '';

const showInScreen = function() {
    screenDisplay.insertAdjacentText('beforeend', `${buttonPressed}`)
};

const addition = function(number1, number2) {
    return number1 + number2;
}

const substraction = function(number1, number2) {
    return number1 - number2;
}

const multiplication = function(number1, number2) {
    return number1 * number2;
}

const division = function(number1, number2) {
    return number1 * number2;
}

// Select all buttons and add listener
document.querySelectorAll('button').forEach(button => {

    button.addEventListener('click', function() {

        // Which button is pressed?
        if (button.dataset.operator == 'equal') {
            
            // Get the entire formula from the screen as a string
            let formula = document.querySelector('.screen').textContent;   
            
            // Find the operator and then split to keep only the numbers as an array
            let onlyNumbers = formula.split(/[+-/*]/);

            // Convert the strings to numbers
            let number1 = parseInt(onlyNumbers[0]);
            let number2 = parseInt(onlyNumbers[1]);
            
            // Check which operation has to happen by searching for the corresponding symbol
            if (formula.includes('+')) {
                result = addition(number1, number2);
            } else if (formula.includes('-')) {
                result = substraction(number1, number2);
            } else if (formula.includes('*')) {
                result = multiplication(number1, number2);
            } else if (formula.includes('/')) {
                result = division(number1, number2);
            } else {
                return;
            }

            screenDisplay.insertAdjacentHTML('beforeend', `<span class="result">${result}</span>`);

        } else if (button.dataset.operator == 'clear') {
            
            screenDisplay.textContent = '';

        } else {

            // Save which button is pressed and show it on the screen
            buttonPressed = button.textContent;
            showInScreen();
        }

    });

});