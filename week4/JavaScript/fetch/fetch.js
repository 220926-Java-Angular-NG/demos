/*
Into to the FETCH API 

        - The Fetch API provides a fetch() method defined on the window object.
         This method used to send requests and returns a Promise that retrieved from the response.
          A Promise object represents a value that may not be available now but, will be resolved in the future.
           It allows us to write asynchronous code.

*/



// get our button

let button = document.getElementById("button");

//add an eventlistener to our button

button.addEventListener('click', async() => {


    // get the value from our user inut field (ie the text box)
    let inputValue = document.getElementById("field").value;


    // send a request to the pokemon api
    // to do that we have to wrap our code in a try catch


    try {

        // this fetch method implicitly returns a Promise
        const raw_response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);

        if(!raw_response.ok){
            // throw new Error(raw_response.status);
            alert(`Error Status: ${raw_response.status}`)
        }

        const json_data = await raw_response.json();

        console.log(json_data);

            // here we are calling our 'addPokemonToPage' helper function
            //this helper funtion is specifically to manipuate our DOM
            // and passin in the 'json-data' we receieve from our api call
            addPokemonToPage(json_data);



    }catch(error){
        console.log(error);

    }

}

)

function addPokemonToPage(json_data){

    // this is where we will manipulate our DOM

    var input = document.getElementById("input");
    var pokeName = document.createElement('h2');

    ///note: append vs appendChild

    pokeName.innerHTML = `Name: ${json_data.name}`
    input.append(pokeName);

    var br = document.createElement('br');
    input.append(br);

    var pokeId = document.createElement('h3');
    pokeId.innerHTML = `ID: ${json_data.id}`;
    input.append(pokeId);
    input.append(br);

    var image = document.createElement('img');
    image.setAttribute('src', json_data.sprites.front_default);
    image.setAttribute('height',"300");
    image.setAttribute('width',"300")

    input.append(image);
    input.append(br);

    var line = document.createElement('hr');
    input.append(line);
}