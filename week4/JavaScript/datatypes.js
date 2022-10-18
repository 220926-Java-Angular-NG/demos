// JS Dataypes 

var num = 7;
var str = `${num} is my favorite number`;
// the const keyword is used to set a variable that should not be changed - 
// there won't be a compile error but there will be a runtime error when the 
//webpage is loaded
// const bool = false;
var bool = false;
var nullData = null;
var undefinedData = undefined;



//Symbols - symbols allow us to create "hidden" properties on an object

var id = Symbol("id");

//Person Object
// bool = 345;

//JavaScript
var Person = {
    firstname: "Tiffany",
    lastname:"Obi",
    toDos: ['eat',"sleep",'code,',0,bool],
   // ()=>this is an example of the syntax for an arrow function
    sayHi: (name)=>{
        // this is the syntax for String interpolation in javascript
        return `Hello ${name} add more stuff `;
    },
    fullname: `${this.firstname} ${this.lastname}`,
    [id]:12345
}


// JSON.stringfy() - turn on object to string
console.log(Person.sayHi(JSON.stringify(Person)));

let numEx = document.getElementById("num-ex");
let strEx = document.getElementById("str-ex");
let boolEx = document.getElementById("bool-ex");

numEx.innerHTML = num;
strEx.innerText = str;
// boolEx.innerHTML = bool;


if(bool){
    boolEx.innerHTML = "I have a true value"
}else {
    boolEx.innerHTML = "I have a false value"
}

let nullEx = document.getElementById("null-ex");

if(nullData){
    //nullData is technically falsy because the value "null" is falsy
    nullEx.innerHTML = "no value at home"
} else {
    nullEx.innerHTML = "this is printing because null data is falsy"
}

let undex = document.getElementById("und-ex");

if(!undefinedData){
    undex.innerHTML = "Sorry, I was declared but not defined"
}

let objEx = document.getElementById("obj-ex");
// objEx.innerHTML = Person; this prints [object Object] in our innerHTML

objEx.innerHTML = JSON.stringify(Person);

//use string interpolation to get the propeties of the objects and use their values to create a sentence
objEx.innerHTML=`My name is ${Person.fullname} and my id is ${Person[id]}`;
