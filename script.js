let currentInput = '';
let resultDisplayed = false;

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    currentInput = '';
    resultDisplayed = false;
}

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
    }
    currentInput += value;
    document.getElementById('display').innerText = currentInput;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').innerText = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
