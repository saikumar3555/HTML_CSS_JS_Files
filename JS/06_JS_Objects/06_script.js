/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/

// Create an Object in JS
var fridge = {};
console.log(fridge);

// Add Properties to Object
fridge.eggs = 20;
fridge.veg = 40;
console.log(fridge);

// Object Literal
var mobile = {
    company : 'Lenovo',
    color : 'Black',
    RAM : '4GB',
    isInsured : false
};
console.log(mobile);

// Access the properties of an Object
console.log(' Company : ' + mobile.company);
console.log('isInsured : ' + mobile.isInsured);

// Access the non-existing prop of an Object
console.log('Non-Exists : ' + mobile.capacity);

// dot , [] notation
console.log('Color : ' + mobile.color); // Black
console.log('Color : ' + mobile['color']); // Black

// Nested Object
var student = {
    name : 'Rajan',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        country : 'India'
    }
};
console.log(student);

// Access the nested Object
console.log(student.address);

// Add properties to an Object
student.dob = 'JAN-2000';
console.log(student);

// Add properties to nested Object
student.address.state = 'Telangana';
console.log(student.address);

// Delete a property from an Object
delete student.address;
console.log(student);

delete  student.dob;
console.log(student);

// functions in Objects
var student1 = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(student1.fullName());




