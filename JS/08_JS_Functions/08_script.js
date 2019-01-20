/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/


// Simple Function with no args
// Function definition
function greet() {
    console.log('Good Morning');
}
// call function / execute
greet();

// function with arguments
function greetArgs(name) {
    console.log('Good Morning '+ name);
}
greetArgs('John');

// Function with less Args
function greetLessArgs(name , age) {
    console.log('Hello ' + name + ' You are ' + age + ' yrs Old');
}
greetLessArgs('John');

// Function with more Args
function greetMoreArgs(name , age) {
    console.log('Hello ' + name + ' You are ' + age + ' yrs Old');
}
greetMoreArgs('John',40,'Manager');

// Function with return values
function greetReturn(name){
    var greetMsg = 'Hello ' + name + ' Good Morning';
    return greetMsg;
}
var greeting = greetReturn('John');
console.log(greeting);

// Function Expression
var greetFn = function(name){
    console.log('Iam from Function Expression ' + name);
};

greetFn('John');

// Functions as the parameters
function greet1(name) {
    console.log('Greet 1 ' + name);
}
function greet2(name) {
    console.log('Greet 2 ' + name);
}
function greetCaller(fName,name){
    fName(name);
}
greetCaller(greet2,'Williams');

// Functions are params in function expressions
var greetFn1 = function() {
  console.log('Iam from GreetFn 1');
};
var greetFn2 = function() {
    console.log('Iam from GreetFn 2');
};
var greetFnCaller = function(fName) {
    fName();
};
greetFnCaller(greetFn2);

// functions inside some other functions
function outerFn() {
    console.log('Iam from outer Function');

    function innerFn() {
        console.log('Iam from inner Function');
    }
    innerFn();
}
outerFn();

// Functions inside an Object
var car = {
    color : 'White',
    fuel : 'Diesel',
    capacity : '5000CC',
    model : 'Rolls Royce',
    specification : function() {
        var spec = 'Color : ' + this.color + ' ' +
                    'Fuel : ' + this.fuel + ' ' +
                    'Capacity : ' + this.capacity + ' ' +
                    'Model : ' + this.model;
        return spec;
    }
};
var carSpec = car.specification();
console.log(carSpec);

// Functions inside a nested Object
var student = {
    name : 'Rajan',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'Telangana',
        country : 'India'
    },
    isFromState : function(state) {
        return state.toLowerCase().trim() === this.address.state.toLowerCase().trim();
    }
};

var isFromTelangana = student.isFromState(' TELANGANA ');
console.log('isFromTelangana : ' + isFromTelangana);



