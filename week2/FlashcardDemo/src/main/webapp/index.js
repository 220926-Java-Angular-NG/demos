// access my sign up button
// change the window to point at the register.html page for a user to sign up
let signUpButton = document.getElementById("sign-up");

signUpButton.addEventListener('click', (event)=>{
event.preventDefault();
window.location.replace("register.html")

});



// we are taking in the email and password
// sending a request to our api (localhost)
// then save out current current to our localStorage
// tell our webpage to point to our home.html page


let loginButton = document.getElementById("login");

loginButton.addEventListener('click', async(event) =>{
event.preventDefault();


let email1 = document.getElementById("email-sign-in").value;
let password1 = document.getElementById("password-sign-in").value;


// creating an JSON Object using the inout from the user
// note that the keys for our objects must match the 
// fields in our Models in the backend

let loginInfo = {
    email: email1,
    password:password1
}

// turn our JSON object literal into JSON

let json = JSON.stringify(loginInfo);


try {

    const raw_response = await fetch(`http://localhost:8080/login`,{
        method:"POST", // we hdd the http to be executed
        body:json
    });

    if(!raw_response.ok){
        throw new Error(raw_response.status)
    }

    raw_response.json().then( (data) => {

        let loggedInUser = JSON.stringify(data)

        localStorage.setItem("currentUser",loggedInUser)
        console.log(loggedInUser);
        
    })

    setTimeout( ()=>{
        window.location.replace("home.html")
    }, 3000 )


}catch(error){
    console.log(error)
}

})