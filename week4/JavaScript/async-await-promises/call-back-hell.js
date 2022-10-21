/*
Starting from Zero: The life before Promises

// Asynchronous - not crdinated in time
// meaning that if our methods are asynchronous
// two operations are happening at the same time / running parellel
//multi thread

// sychronous - one operation waiting for the other to complete before starting
//single thread

In the past when we wanted to deal with asynchronous operations , we had to use callback fucntions
When you nest utiple callback functions the cod becomes very difficult to maintain.
This issue is called 'call back hell'

Suppose you want to perform 2 async ops in your JS code
1.Select a user from the database
2.Get the services of the user ( ex: we are looking to see what 'internet sevices' the user has)
3.Calculate the total cose based of the services


*/

// get the user

function getUser(id, callback){
    console.log("get the user from the 'db'")

    setTimeout( () => {
        callback({
            //our call back is going to return a user
            userId:id,
            username:"John"
        })
    },1000) // this is first inline to be excuted
}


//get the services for the user we found

function getServices(user, callback){
    console.log(`Get ${user.username}'s services from the db`);

    setTimeout(()=>{
        callback(['Email','AWS','Oracle'])
    }, 2 * 1000) // next in line
}



// calculate the cost these services

function getServicesCost(services, callback) {
    console.log(`Calculate services cost for these services -  ${services}`)

    setTimeout(() => {
        callback(services.length * 100)
    }, 3* 1000) // last in line
}


//nest functions in order to get our final result
getUser(7, (user) => {
    getServices(user, (services) => {
        getServicesCost(services, (cost) => {
            console.log(`The final cost is $${cost}`)
        })
    })
})