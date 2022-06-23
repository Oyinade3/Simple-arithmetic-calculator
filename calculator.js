let inputOne = parseInt(prompt('Enter your first number:'));
let operator = prompt('Enter your arithmetic operator(+, -, /, *)');
let inputTwo = parseInt(prompt('Enter your second number:'));

switch(operator){
    case '+':
        result = inputOne + inputTwo;
        break;
    case '-':
        result = inputOne - inputTwo;
        break;
    case '*':
        result = inputOne * inputTwo;
        break;
    case '/':
        result = inputOne / inputTwo;
        break;
    default:
        result = 'Error, try again!';
        break;
}
alert(result);
alert('Refresh to try another operation.')