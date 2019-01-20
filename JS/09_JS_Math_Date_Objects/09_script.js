/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
var piValue = Math.PI;
console.log('piValue : ' + piValue);

// Math sqrt
var sqrt = Math.sqrt(144);
console.log('sqrt of 144 is : ' + sqrt);

// find the min of 4 numbers
var min = Math.min(5,4654,61,10,84964,6516,419651,849,1651,98,7984,31,894,91);
console.log('min : ' + min);

// find the Max of 4 numbers
var max = Math.max(5,4654,61,10,84964,6516,419651,849,1651,98,7984,31,894,91);
console.log('Max : ' + max);

// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : ' + pow);

// generate the random numbers from 0 to 100
var random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
var today = new Date();
console.log(today);

// Get proper date
var date = today.toLocaleDateString();
console.log(date);

// Get the Time
var time = today.toLocaleTimeString();
console.log(time);

// get full day of the week using switch statement
today = new Date().getDay();
output = 'Today is : ';
console.log(today);
switch(today){
    case 0:
        output += ' Sunday';
        break;
    case 1:
        output += ' Monday';
        break;
    case 2:
        output += ' Tuesday';
        break;
    case 3:
        output += ' Wednesday';
        break;
    case 4:
        output += ' Thursday';
        break;
    case 5:
        output += ' Friday';
        break;
    case 6:
        output += ' Saturday';
        break;
    default:
        output += ' No - Day';
        break;
}
console.log(output);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
var minValue = Number.MIN_VALUE;
console.log('MinValue : ' + minValue);

var maxValue = Number.MAX_VALUE;
console.log('MaxValue : ' + maxValue);

var infinity = Number.POSITIVE_INFINITY;
console.log(infinity);

var num1 = 100;
console.log('value : ' + num1 + ' Type : ' + typeof num1);

var str1 = num1.toString();
console.log('value : ' + str1 + ' Type : ' + typeof str1);

var num2 = parseInt(str1);
console.log('value : ' + num2 + ' Type : ' + typeof num2);


/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */

var greetMsg = 'Good Morning';

console.log(greetMsg.toLowerCase());
console.log(greetMsg.toUpperCase());
console.log(greetMsg.length);
console.log(greetMsg.substr(0,4)); // Good
console.log(greetMsg.substr(5)); // Morning
console.log(greetMsg.charAt(0)); // G

// Example 1 : Count the Number of  'o's
var theStr = 'GOOD Morning';
function countZeros(str) {
    var count = 0;
    str = str.toLowerCase();
    for(var i = 0; i<= str.length-1; i++){
        var ch = str.charAt(i);
        if(ch === 'o'){
            count++;
        }
    }
    return count;
}
console.log('Count is : ' + countZeros(theStr));

// Example 2 : Reverse String
theStr = 'Good Morning';
function reverseString(str) {
    var tempStr = '';
    for(var i = str.length-1 ; i>=0 ; i--){
        tempStr += str.charAt(i);
    }
    return tempStr.toUpperCase();
}
console.log('RevString : ' + reverseString(theStr));

// Example 3 : Check Palindrome String
theStr = 'ABCDCBA';
function isPalindrome(str) {
    return str.toUpperCase() === reverseString(str);
}
console.log('is Palindrome ? : ' + isPalindrome(theStr));

// Example 4 : Traingle String
theStr = 'NAVEEN SAGGAM';
function triangleStr(str) {
    str = str.toUpperCase();
    var tempString = '';
    for(var i = 0; i<= str.length; i++){
        tempString += str.substr(0,i) + '\n';
    }
    for(var j = str.length-1 ; j >= 0 ; j--){
        tempString += str.substr(0,j) + '\n';
    }
    return tempString;
}
console.log('Triangle String : ' + triangleStr(theStr));

// Example 5 : Display String Number
var strNumber = '9844';
function displayStringNumber(str) {
    var tempStr = '';
    for(var i =0; i< str.length ; i++){
        var ch = parseInt(str.charAt(i));
        switch(ch){
            case 0:
                tempStr += ' ZERO ';
                break;
            case 1:
                tempStr += ' ONE ';
                break;
            case 2:
                tempStr += ' TWO ';
                break;
            case 3:
                tempStr += ' THREE ';
                break;
            case 4:
                tempStr += ' FOUR ';
                break;
            case 5:
                tempStr += ' FIVE ';
                break;
            case 6:
                tempStr += ' SIX ';
                break;
            case 7:
                tempStr += ' SEVEN ';
                break;
            case 8:
                tempStr += ' EIGHT ';
                break;
            case 9:
                tempStr += ' NINE ';
                break;
            default:
                tempStr += ' ';
                break;
        }
    }
    return tempStr;
}
console.log(displayStringNumber(strNumber));


// Get thee String Number 
strNumber = '9844';
var stringArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
function getStringNumber(str) {
   var tempStr = '';
   for(var i =0; i<str.length; i++){
        tempStr += stringArray[parseInt(str.charAt(i))] + ' ';
    }
   return tempStr;
}
console.log(getStringNumber(strNumber));

// Digital Clock
function digitalClock() {
    var time = new Date().toLocaleTimeString();
    document.querySelector('#time').textContent = time;
}
setInterval(digitalClock,1000);