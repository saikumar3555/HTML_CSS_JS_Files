// Get the HTML Elements
var firstNumberElement = document.querySelector('#firstNumber');
var secondNumberElement = document.querySelector('#secondNumber');
var operatorButton = document.querySelector('#operator');
var resultButton = document.querySelector('#result-button');
var equalsButton = document.querySelector('#equals-button');
var plusButton = document.querySelector('#plus-button');
var minusButton = document.querySelector('#minus-button');
var multiplyButton = document.querySelector('#multiply-button');
var divideButton = document.querySelector('#divide-button');
var clearButton = document.querySelector('#clear-button');

// Click on minus Button
minusButton.addEventListener('click',function() {
   operatorButton.textContent = minusButton.textContent;
});

// Click on plus Button
plusButton.addEventListener('click',function() {
    operatorButton.textContent = plusButton.textContent;
});

// Click on divide Button
divideButton.addEventListener('click',function() {
    operatorButton.textContent = divideButton.textContent;
});

// Click on multiply Button
multiplyButton.addEventListener('click',function() {
    operatorButton.textContent = multiplyButton.textContent;
});

// Click on Equals Button
equalsButton.addEventListener('click',function() {
   var firstNumber = firstNumberElement.value;
   var secondNumber = secondNumberElement.value;
   var operator = operatorButton.textContent;
   var  result = 0;
   if(firstNumber !== '' && secondNumber !== ''){
        var num1 = parseFloat(firstNumber);
        var num2 = parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = 0;
                break;
        }
        resultButton.textContent = result;
   }
   else{
       resultButton.textContent = 'RESULT';
   }
});

// Clear button Logic
clearButton.addEventListener('click',function() {
   firstNumberElement.value = '';
   secondNumberElement.value = '';
   operatorButton.textContent = '+';
   resultButton.textContent = 'RESULT';
});