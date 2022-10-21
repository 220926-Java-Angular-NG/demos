// Ternary Operator - syntax: <condition> ? <value1> : <value2>;

// takes in a condition followed by a question mark (?)
// then an expression to execute if the condition is 'truthy' , followed by a colon (:)
// and finally the expression to execute if the condition is  'falsy'
// the ternary operator is frequently used to  as an alternative  to an if...else statement

function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true)); // prints $2.00

console.log(getFee(false)); // prints $10.00

console.log(getFee(null)); // returns $10.00 b/c null is falsy


//In JS a truthy value is a value that is considered
//true when encountered in a Boolean context.
//All values are truth values unless they are definied as falsy
// Falsy values = false, 0, -0 , 0n , "", null, undefined, and NaN
// note: Falsy values also include empty sequences 
//(lists, tuples,strings,dictionaries, sets)


//Array - unlike Java , array in JS  can be added to at any index 


//Two ways to define an array
//using the new keyword

let primes = new Array(2,3,5,7,11,13);
console.log(primes);

//creating an array literal

let colors = ['blue',"red",'orange',"gold"];
console.log(colors);

//add a new element to the end of my array
colors.push("turquoise");
colors.push("pink");
colors.push("green")

//not printing but you get the idea

// remove an element from the end of my array
// this pop() method removes the element and returns it

console.log(colors.pop());

console.log(colors);

//there are other methods suc as 'splice()' and 'shift' that are used for removing elements
//from an array :
//todo: use splice() and shift to remove elements from the array
// spread / rest operators 


//Control Flow 

// traditional for loop
// note .length is a property and not a method so we dont need to call it using ()
for(let i = 0; i < colors.length; i++){
    console.log(colors[i])
}


// for - in : allows iteration over the keys of any object

let person = {
    name: 'Justin',
    age: 23
};

for (let prop in person){
    console.log(person[prop]) // print Justin then 23
}

// using for - in on an array 

for(let index in colors){
    console.log(index)
}



// for -of : allows iteration over an array or array like objects
// used to get the values not just the key or index

let people = [
    {
        name:'Vicky',
        age:22

    },
    {
        name:'Nnabueze',
        age:41

    }
];

for(let person of people){
    console.log(person.name)
}

//if you wanna 
//use thie for in and for of methods to print the indexes and vaues in our primes and colors arrays

//For each 
//This function is a functional array method
// it takes in a callback function and executes that function
//for each element in the array
// note: the method itself returns undefined

primes[7] = 19;

primes.forEach(
    function(value, index){
        //Note the official name for what were printing is a Template Literal : `  info here ${} info there`
        console.log(`Index: ${index}, Value ${value}`)
    }
)