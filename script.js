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
    '',
    '0',
    ''
]

let number1 = '';
let number2 = '';
let operator = '';
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
        if(button.getAttribute('value')=='='){
            button.addEventListener('click', () => {
                getResult(number1, number2, operator)
            })   
        } else if(parseInt(button.getAttribute('value') == NaN)){
        button.addEventListener('click', () => {
            setOperator(button.getAttribute('value'));
        })} else {
            button.addEventListener('click', () => {
                number1 += button.getAttribute('value');
            })
        }
        container.appendChild(button);

    } 
}


function setOperator(value) {
    console.log(value)
    operator = value;
    /*display.textContent = `${operator}`;*/
    number2 = number1;
    number1 = '';
}

function getResult(num1, num2, operator) {
    console.log(num1, num2, operator)
}


createButtons()