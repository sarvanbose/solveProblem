//prototype
/*
JavaScript Prototypes
All JavaScript objects inherit the properties and methods from their prototype.
Objects created using an object literal, or with new Object(), inherit from a prototype called Object.prototype.
Objects created with new Date() inherit the Date.prototype.
The Object.prototype is on the top of the prototype chain.
All JavaScript objects (Date, Array, RegExp, Function, ....) inherit from the Object.prototype.

*/

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";

 
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};