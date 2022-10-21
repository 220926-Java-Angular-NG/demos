// In 2017 , ES8 was released and with that release came the async and await keywords
// we use the async keyword to define functions that will handle asynchronous operations
// we use the await keyword to 'wait' for the methods turn to be executed


async function sayHi(){
    return 'Hi'; // Note: an asynchronous function implicitly returns a Promise
}

//invoke our async function
// sayHi().then(console.log);




//async function thats explicitly returning a promise
async function sayHey(){
    return Promise.resolve('Hey');
}

//an anonymous async function
let sayHello = async function(){
    return 'Hello';
}

//arrow notation async function
let sayBye = async () => {
    return'Good-bye!';
}

//in order for use to use an async func withng another function the outter function must be async as well
async function display(){

    // to use async we have to use the await keyword as well as well as wrap the code in a try{}catch{}

  try {
    let result1 = await sayHey();
    console.log(result1);

    let result2 = await sayHello();
    console.log(result2);

    let result3 = await sayBye();
    console.log(result3);

  } catch (error){
        console.log(error)
  }
}

display();