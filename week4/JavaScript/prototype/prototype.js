/**
 * Life before JS Classes
 * 
 *  -What is a prototype ?
 *      - every object in JS has a built in property which is called its 'prototype'
 *      - the protoype is itself an object, so the prototype will have its own prototype which
 *          -can later be associated in a thing called a 'prototype chain'
 * 
 *  -Why would we use prototypes? 
 *      - Before ES6, prototypes were commonly used to make objects constructors
 * 
 */

function Person(name, hobby){
    this.name = name;
    this.hobby = hobby
}

var person = new Person("John Doe", "coding")
console.log(person)

//if we wanted to print our the name of this person
Person.prototype.getName = function(){
    return this.name;
}

console.log(person.getName());

// if we wanted to add a new state to our Person
Person.prototype.age = 55;


console.log(person.age);
  person.age = 30;
console.log(person.age);

var person2 = new Person("Thomas","fishing");
console.log(person2.age);
person2.age = 40;
console.log(person2.age);

// we can modify prototypes givien to us in JS as well as ones we create
Object.prototype.jobtitle = "associate";
console.log(Object.prototype);
