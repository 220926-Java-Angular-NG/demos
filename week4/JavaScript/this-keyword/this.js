/**
 * What is 'THIS' ?
 * 
 * In JS, the 'this' keyword refers to the object that it belongs to
 * 
 * -By itself 'this' refers to the global object
 * -In a function , 'this' still refers to the global object
 * -In a method (remember a method in JS refers to a funciton on an object) 'this'
 * refers to the object
 *
 * 
 * -In strict mode (Strict mode makes bad coding practices to return errors
 * by placing your JS code into a more restricted variant of itself) 'this' refers to the 
 * global object but in a function 'this' returns undefined
 * 
 */

 
 'use strict'; //this tells our code that this file will use strict mode

console.log(this);


function foo(){
    console.log(this);
}

foo();


// x = "Hello developers!";
// console.log(x); 
// Declaring a variable without (var,let,or const) when we are not in strict mode is the
//same as declaring a variable with var 
// however when we are in strict mode the transpiler will return an error


//Make an Object Literal
// Note: an objectliteral is not JSON
//this because in JSON both the keys and values are 'strings'

const Person = {
    firstname:"Jesse",
    lastname:"Wood",
    id:123,
    fullname: function(){
        return `${this.firstname} ${this.lastname}`;
    }

    // because this is a method (ie a function within an object)
    // 'this' refers to the object
}

console.log(Person.fullname());

this.cat = "Finn";
console.log(this.cat);
console.log(this)