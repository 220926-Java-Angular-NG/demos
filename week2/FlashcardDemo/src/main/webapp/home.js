let currentUser = localStorage.getItem("currentUser");
currentUser = JSON.parse(currentUser);
console.log(currentUser);

let welcomeLabel = document.getElementById("welcome-label");
welcomeLabel.innerHTML = `Welcome ${currentUser.firstname}! Make a Flashcard!`


let submitButton = document.getElementById("submit-button");

submitButton.addEventListener('click', async(event) => {
    event.preventDefault();

    let questionText = document.getElementById("question").value;
    let answerText = document.getElementById("answer").value;


    // console.log(`Question: ${questionText} - Answer: ${answerText}`)

    let cardObject = {
        question:questionText,
        answer:answerText,
        creatorId:currentUser.id
    }

    let json = JSON.stringify(cardObject);


    try {

        let raw_response = await fetch(`http://localhost:8080/flashcard`,{
            method:"POST",
            body:json
        })

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        alert("You're card was created!")
        let questionBox = document.getElementById("question");
        questionBox.value = "";
        let answerBox = document.getElementById("answer");
        answerBox.value = "";


    } catch(error){
       console.log(error)
    }
})

let viewAllButton = document.getElementById("view-all");
viewAllButton.addEventListener("click", async(event) => {
    event.preventDefault();

    try {
        // fetch send a get request by default unless directed to do otherwise
        let raw_response = await fetch(`http://localhost:8080/flashcards`)

        if(!raw_response.ok){
            throw new Error(raw_response.status)
        }

        raw_response.json().then( (data) => {

            // create a helper function that will use the json data from the request to manipulate the dom
            // console.log(data); print the array we get back from our http request

            addFlashcardsToPage(data);

        })

    } catch(error){
        console.log(error)
    }
})

function addFlashcardsToPage(cardArray){

    let cardButtonP = document.getElementById("card-button");

    let br = document.createElement('br');

    cardButtonP.append(br);
    cardButtonP.append(br);


    for(let card of cardArray){
        let cardElement = document.createElement("h3");
        cardElement.innerHTML = `Question: ${card.question} - Answer: ${card.answer}`
        cardButtonP.appendChild(cardElement);
    }


}
