var num1 = 45;
var num2 = "45";


//functions allow us to have reusable code in JS
//THERE ARE SEVERAL WAYS TO MAKE A FUNCTION


//1. using the function keyword

function add(n1,n2){
    var sum;

    //check the datatypes of our variables
    // console.log("Num 1 is a number " + Number.isInteger(n1));
    // console.log("Num 2 is a number " + Number.isInteger(n2));

    //type coercion = the process of automatic/implicit conversion of values from one datatype to another
    //== vs ===
    // '==' : equality operator = can be used to compare values regardless of their datatypes
    // '===' : this operator will check the values as well as the datatype to see of they are the same
   // if(Number.isInteger(n1) === Number.isInteger(n2)){


    if(n1 == n2){
        console.log("in the if block")
          sum = n1 + n2; // this will print as a string technically because it returns 4545
    } else {
        console.log("in the else block")
        sum = parseInt(n1) + parseInt(n2); // this will print as an int , it return 90 as the sum
    }

    return sum;


}

var result = add(num1,num2);
document.getElementById("example1").innerHTML = `Regular Function Call: add(45,'45') = ${result}`;


//2 Anonymous Functions

// these functions do  not have names
// instead they are invoked by using their assigned variable nam

var multiply = function(n1,n2){
    return parseInt(n1) * parseInt(n2);
};

document.getElementById("example2").innerHTML = `Anonymous Function Call Result: ${multiply(num1,num2)}`;


//3. Arrow Functions
//we dont use the functon keyword or give it a function name

var square = (n) => {
    // here i wont use parseInt because i will hard code a number
   return n*n;
};


document.getElementById('example3').innerHTML = `Arrow Function Call Result: ${square(678)}`;


//4. Callback functions
// is passed into another function as an argument
// aka a function call within a function

// make our inner function - which is technically our callback function
function alertFunc(n){
    // alert(`You're answer is ${n*2}`);

};


// here we will create or atter function which will call our callback function

function callTheAlert(num,callback){
    callback(num);
     return(num);
};

document.getElementById('example4').innerHTML = `CallBack function Result: ${callTheAlert(10,alertFunc)}`;


//5 Closures
//closures give you access to the outter functions scope
//with use of an inner function

function complexCalcFunc(n){

    var secretNumber = n + 6;

    //make a closure ( a funciton within a function)

    //Note: when we talk about OOP in JS it refers to Encapsulation
    //Encapsulation is achieved in JS with the use of closures


    function crazyMath(){
        // Note: 'crazyMath' remembers the value of 'secret number'
        //even though it is in a different scope

        console.log("Youre secret number is " + secretNumber);
        let solution = (secretNumber*secretNumber - 1 + 14 /8)
        console.log(`Youre secret math solution is : ${solution}`)
        return solution
    }

return crazyMath();
}

let num3 = 25;
let mycomplexResult = complexCalcFunc(num3);

// mycomplexResult();

document.getElementById("example5").innerHTML= `Closure Call Result: ${mycomplexResult}`

// crazyMath();
