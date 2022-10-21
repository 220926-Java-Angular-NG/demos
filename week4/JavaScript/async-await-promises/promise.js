//To avoid the 'callbackhell', ES6 introduced promises
// this allowed us to write asynchromous code in a more managable way
//Definition: A promise is an object that MAY produce a single value at some point in the future
// a promise can either be resolved or rejected (rejected due to some type of network error)

// We are able to execute our promises without halting the main program flow

// A promise may be in 3 possible states
//1.Fulfilled
//2.Rejected
//3.Pending


// note we are no longer using callback funtions
// aka we are no longer adding callback into our params

//look up reject and wat it means / how to use
function getUser(userId){
    return new Promise((resolve,reject) => {
        console.log("Getting user form db");

        setTimeout(() => {
            resolve(
                {
                id:userId,
                username:'Jimmy'
            }
            )
        },1000)
    })
}

function getServices(user){
    return new Promise( (resolve,reject) => {
        console.log(`Get services for ${user.username}`)

        setTimeout(()=> {
            resolve(['Netflix', 'Disney+','CrunchyRoll','Hulu'])
        },2*1000)
    })
}

//passing in the callback just to show that we are not in fact using any callback methods

function getServicesCost(services,callback){

    return new Promise((resolve,reject) => {
        console.log(`Calculate service cost of - ${services}`)
        setTimeout(() => {
            resolve(services.length * 125)
        }, 3*1000)
    })

}

//instead of the messy nesting of callback functions
// we can chain our method calls 

getUser(103).then(getServices).then(getServicesCost).then(console.log) // 500