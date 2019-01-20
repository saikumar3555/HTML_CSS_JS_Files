// If Else condition Example
var courseCompleted = true;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log('You Will Get a Job Soon');
}
else if(courseCompleted && !practiceCompleted){
    console.log('Please start Practicing');
}
else{
    console.log('Please Join any Course');
}

// For loop Example to display from 1 - 10 values
var output = '';
for(var i = 0; i<= 10; i++){
    if(i <= 9){
        output += i + " , ";
    }
    else{
        output += i;
    }
}
console.log(output);

// While loop Example to display from 1 - 10 values
output = '';
i = 1;
while(i <= 10){
    if(i <= 9){
        output += i + " - ";
    }
    else{
        output += i;
    }
    i++;
}
console.log(output);

// Do while loop Example to display from 1 - 10 values
output = '';
i = 1;
do{
    if(i <= 9){
        output += i + " * ";
    }
    else{
        output += i;
    }
    i++;
}
while(i <= 10);
console.log(output);

// For Loop to print 20 to 0
output = '';
for(i = 20; i>= 0; i -= 2){
    if(i >= 1){
        output += i + " , ";
    }
    else{
        output += i;
    }
}
console.log(output);

// While loop to print 20 to 0
output = '';
i = 20;
while(i >= 0){
    if(i >= 1){
        output += i + " - ";
    }
    else{
        output += i;
    }
    i -= 2
}
console.log(output);

// do-while loop to print 20 to 0
output = '';
i = 20;
do{
    if(i >= 1){
        output += i + " * ";
    }
    else{
        output += i;
    }
    i -= 2;
}
while(i >= 0);
console.log(output);

// Switch Statement Example
var today = new Date().getDay();
output = '';
today = 0;
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