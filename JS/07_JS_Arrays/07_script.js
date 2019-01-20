// creation of arrays
var array = [10,20,30,40,50,60];
console.log(array);

// Accessing an array and its properties
array[6] = 70;
console.log(array);


// Access not existed property from an array
console.log(array[100]); // undefined

// Accessing length of an Array
console.log('Length : ' + array.length);

// reverse the array using reverse()
array = [10,20,30,40,50];
console.log('Before : ' + array);
array.reverse();
console.log('After : ' + array);

// Remove the first value of the array: shift()
var technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.shift();
console.log('After : ' + technologies);

// Add value to front of the array:unshift()
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.unshift('Boostrap');
console.log('After : ' + technologies);

// Remove the last value of the array: pop()
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.pop();
console.log('After : ' + technologies);

// Add value the end of the array: push()
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.push('AJAX');
console.log('After : ' + technologies);

// Remove an element from an Array , Arguments: colors.splice(pos,n):

// splice(index) -> Removes all the elements from the index
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.splice(2);
console.log('After : ' + technologies);

// splice(index,noofelements)
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.splice(2,2);
console.log('After : ' + technologies);

// splice(index,1,replaceElement)
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'JQuery'];
console.log('Before : ' + technologies);
technologies.splice(1,1,'Bootstrap');
console.log('After : ' + technologies);

// Create a copy of an array. Typically assigned to a new variable:slice();
var arr1 = [10,20,30,40,50];
var arr2 = arr1.slice(); // Creates a new copy

arr1.splice(2);

console.log('Array 1 : ' + arr1);
console.log('Array 2 : ' + arr2);

// indexOf()
array = [10,20,30,40,50];
var value = 500;
if(array.indexOf(value) === -1){
    console.log('The ' + value + ' is not Exists');
}
else{
    console.log('The ' + value + ' is exists @ ' + array.indexOf(value));
}


// Join()
array = [10,20,30,40,50];
var str = array.join(' * ');
console.log(str);


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// How to loop through the array and display
technologies = ['HTML' , 'CSS' , 'JavaScript' , 'Bootstrap' , 'JQuery'];
var output = '';

// using normal for-loop
for(var i = 0; i<technologies.length ; i++){
    output += technologies[i] + ' ';
}
console.log(output);

// using for-in loop ES5
output = '';
for(var index in technologies){
    output += technologies[index] + ' ';
}
console.log(output);

// using forEach loop
output = '';
technologies.forEach(function (element) {
    output += element + ' ';
});
console.log(output);

/*
// Using for-of Loop ES6
output = '';
for(let element of technologies){
    output += element + ' ';
}
console.log('For-Of ' + output);

// Arrow Functions to loop with an Array ES6
output = '';
technologies.forEach((element) => {
    output += element + ' ';
});
console.log(output);*/

// function



var employees = [];


function addEmployee() {
    var username = document.querySelector('#user').value;
    var password = document.querySelector('#pass').value;
    var email = document.querySelector('#email').value;

    var employee = {
        _name : username,
        _password : password,
        _email : email
    };
    employees.push(employee);
    console.log(employees);
    document.querySelector('#employee').textContent = employees.toString();
}
