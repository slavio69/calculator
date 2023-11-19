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
    if (number1=='' && number2=='' && operator=='') {
        alert("Pick a Number first!")
    } else if (number1=='' && number2 !='') {
        getResult(number2,value)
        number2 = '';
    } else if (number1 != '' && number2=='') {
        getResult(number1, value)
        number1 = '';
    }
    operator = value;
    display.textContent = 0;
}

function getResult(num, operator) {
    console.log(num, operator)
    if (operator=='+'){
        result += parseFloat(num)
    }else if (operator=='-'){
        result -= parseFloat(num)
    }else if (operator=='*'){
        result *= parseFloat(num)
    }else if (operator=='/'){
        result /= parseFloat(num)
    }

}

function selecteNumber(value) {
    if (number1 == '' && operator != '') {
        number2 += value;
        display.textContent = `${number2}`
    }
    else if (number2 == '') {
        number1 += value;
        display.textContent = `${number1}`
    } 
    
}

function clear() {
    number1 = '';
    number2 = '';
    operator = '';
    result = 0;
    display.textContent = 0
}

function endResult(){
    if (number2 != ''){
        setOperator(operator)
    }
    display.textContent = `${result}`
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
        button.setAttribute('style', 'background-color: red')
    }
    else if(value =='='){
        button.addEventListener('click', () => {
            endResult()
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