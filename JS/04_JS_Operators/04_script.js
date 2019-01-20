// Assignment operator =
var name = 'John';
console.log("Name : " + name);

// Arithmetic operators + - * /
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("The Sum of num1 , num2 is : " + sum);

var sub = num1 - num2;
console.log("The Sub of num1 , num2 is : " + sub);

// Short hand math += , -= ,  *= ,/=
var a = 10;
var b = 20;
var add = 0;
add = add + (a + b); // 0 + 10 + 20 = 30
add += (a + b); // 30 + 10 + 20 = 60
console.log(add); // 60

// Conditional operators < , > , <= , >= , !=
var time = 20;
if(time <= 12){
    console.log("Good Morning");
}
else if(time >12 && time <= 17){
    console.log("Good Afternoon");
}
else if(time > 17 && time <= 24){
    console.log("Good Evening");
}
else{
    console.log("Enter Proper Timer");
}

// Unary Operator ++ , -- (pre , post)
var x = 10;
x = x + 1;
x += 1;
x++;
console.log(x);

// Logical operators AND , OR
var inRelation = true;
var parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log("Get Marry Soon");
}
else{
    console.log("Wait until the parents Agreed");
}

// String Concatenation Operator
var str = 10 + 20 + "10" + 20 + 10;
console.log(str); // 30102010

// Ternary operator (? :)
var age = 15;
(age < 18)? console.log('You are Minor') : console.log('You are Major');

// Typeof operator
var abc;
console.log('value : ' + abc + ' type : ' + typeof abc);
abc = 10;
console.log('value : ' + abc + ' type : ' + typeof abc);
abc = 'test';
console.log('value : ' + abc + ' type : ' + typeof abc);
abc = true;
console.log('value : ' + abc + ' type : ' + typeof abc);
abc = null;
console.log('value : ' + abc + ' type : ' + typeof abc);
abc = [10,20];
console.log('value : ' + abc + ' type : ' + typeof abc);

// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}