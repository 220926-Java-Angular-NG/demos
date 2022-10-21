// access out div with the id 'main
// were going to add a header to the div

let mainDiv = document.getElementById("main");

//creating our new element (h1 element)
let header = document.createElement('h1');
header.classList.add('main');
header.innerHTML = "ANNOUNCEMENTS!"


//add this new header element to my div with the id 'main'
mainDiv.appendChild(header);


// get access to the div that is holding 
//the input text and submit button

let boardDiv = document.getElementById("board");

// get out submit button so we can add an event listener

let submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // the default action when pressing a button is to refresh the page
    //in order to prevet that so that we can execute the logic in this method is to use
    // the 'preventDefault()' function

    //retrieving the value from our text input that is on our form
    let textInput = document.getElementById("announcement")
    let message = textInput.value


    //create the new element to be added to the div 

    let newItem = document.createElement('h3');
    newItem.innerHTML = message;

    //adding a new element to our DOM 
    boardDiv.appendChild(newItem);

    textInput.value = '';



})