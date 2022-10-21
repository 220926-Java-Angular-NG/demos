/**
 * Event = something that the browser does or the user does
 * 
 * ex: onclick, onchange. onload, onmouseover , onkeyup etc
 * 
 * What is event propagation?
 *      - the order at which events are triggered in the DOM
 * 
 * Event listeners ? - listen for evets in the DOM and is used to manage actions that
 * occur during the event
 * 
 * 
 * Bubbling vs Capturing 
 * 
 * // we'll use the onclick for our example
 * 
 * -if and element is 'clicked' . it will trigger the event 
 * 
 * Bubbling- 
 * - if the parents element is clicked, then only the parents element will be triggered
 * - if the child element is clicked , then the child would be triggered followed by the parent
 * 
 * Capturing-
 * -If the parents elemnent is clicked, then onl the parents element is triggeres
 * - if the child elements is clicked, the parents will be triggered first, followed by the child element
 * 
 * 
 */

var parent1 = document.getElementById("parent-1");
var parent2 = document.getElementById("parent-2");
var child1 = document.getElementById("child-1");
var child2 = document.getElementById("child-2")


//example 1 - by default , events listeners are set to Bubbling
parent1.addEventListener('click', () => {
    // event.preventDefault(); // this can be used when using a submet button 
    console.log("Bubbling - I am the parent")
})

child1.addEventListener('click',() =>{
    console.log("Bubbling- I am the child")
})


//example 2 - to turn on capturing we must set
//the event listener to 'capturing= true'

parent2.addEventListener('click',() => {
console.log('Capturing - I am the parent')
},true)

child2.addEventListener('click',() => {
console.log('Capturing - I am the child')
}, true)