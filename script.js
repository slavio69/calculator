const buttonNames = [
    '+',
    '-',
    '*',
    '/',
    'C',
    '=',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    ',',
    '0',
    '.'
]

let number1 = '';
let number2 = '';
let operator = '';
let result = 0;
const display = document.querySelector('#display')
/*display.textContent = `${number1}`;*/

function createButtons() {
    const container = document.querySelector('#button-container')
    for (let i=0; i < 18; i++){
        const button = document.createElement('div');
        button.setAttribute('id', `button${i}`);
        button.setAttribute('class', 'buttonsAll')
        button.setAttribute('value', buttonNames[i])
        button.textContent = buttonNames[i];
        const buttonValue = button.getAttribute('value')
        addListener(button, buttonValue)
        container.appendChild(button);

    } 
}


function setOperator(value) {
    if (number1=='') {
        alert("Pick a Number first!")
    }
    operator = value;
    result = parseFloat(number1)
    display.textContent = 0;
}

function getResult(num1, num2, operator) {
    if (operator=='+'){
        result = parseFloat(num1) + parseFloat(num2)
    }else if (operator=='-'){
        result = parseFloat(num1) - parseFloat(num2)
    }else if (operator=='*'){
        result = parseFloat(num1) * parseFloat(num2)
    }else if (operator=='/'){
        result = parseFloat(num1) / parseFloat(num2)
    }
    display.textContent = `${result}`
}

function selecteNumber(value) {
    if (operator === '') {
        number1 += value;
        display.textContent = `${number1}`
    } else {
        number2 += value;
        display.textContent = `${number2}`
    }
    
}

function clear() {
    number1 = '';
    number2 = '';
    operator = '';
    result = 0;
    display.textContent = 0
}


function addListener(button, value) {
    if ( value == '.' || value == ',') {
        button.addEventListener('click', () => {
            selecteNumber(value)
        }) 
    }
    else if ( value == 'C') {
        button.addEventListener('click', () => {
            clear()
        }) 
    }
    else if(value =='='){
        button.addEventListener('click', () => {
            getResult(number1, number2, operator)
        })   
    } else if(value=='+' || value == '-' || value == '*' || value == '/'){
    button.addEventListener('click', () => {
        setOperator(button.getAttribute('value'));
    })} else {
        button.addEventListener('click', () => {
            selecteNumber(value);
        })
    }
}

createButtons()