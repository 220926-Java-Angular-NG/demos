// Timing Events - In JS we make use of timing events when we are looking to automate some task
// there are two key timing event methods in JS - both are functions that are on the window object 

//setTimeout() - a function will execute after waiting a certain amount on milliseconds
//setInterval() - a function with execute repeatedly with a certain interval or pause with 
//milliseconds between executions

//change the color of our <p> element in our DOM 

function changeToBlue(){
    let parent = document.getElementById("parent-1");

    //set the color chnage to be delayed 5 seconds
    console.log("Please wait ...")
    setTimeout(()=>{
        console.log(parent);
        console.log(" ... all done!")

        // apply the class 'color-bluegradient'
        //to the parents class

        parent.classList.add("color-bluegradient")
    },5000)
}

function changeToGreen(){

    let parent2 = document.getElementById("parent-2")

    setTimeout(() => {
        console.log("changing to green")
        parent2.classList.add("color-greengradient")
    })

    console.log("All done")

}