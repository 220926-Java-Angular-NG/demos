/*
this is a multi line comment in JS

Scopes in JS -
what is a scope?
    -scope determines the accessibilty / visibilty of a variable in our code


In JS there are 3 scopes 
    - Global Scope 
        - this variable is visible everywhere 


    - Local Scope 
        - Function Scope 
            - this varibale is accessible withing the function the it is defined

        - Block Scope
            - this variable s accessible within a condition statment
             Block scope also has a special subscope known as 'lexical scope'
            -Lexical scope was introduced in ES6 
                - in lexical scope , a variable is defined outside of a function
                and can be available for use inside of another function even though
                 it was declared before the function was created

*/

// global scope variable
//uses the var keyword
// var name1 = "Bob";
// console.log(name1 + " is seen everywhere")


//lexical scope example

//  let name = "John";

function eatsLunch(){
    var name = "Joe"
    console.log(`${name} is eating lunch`)
}



eatsLunch();

console.log(name);



sayHI();


function sayHI(){

    // console.log(name);

    /*Hoisting is when the variable/function is being used before its even declared
    The JS interpreter will 'hoist' or move to the top of the scope in which the variable is 
    being declared */
    name3 = "Sammie";
     

    if(name3 === "Samuel"){
        var name3 = "Samuel";
        console.log("Hi " + name3);
    } else {
        console.log(" Hello " + name3)
    }

}

