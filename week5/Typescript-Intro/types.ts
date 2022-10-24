//count = 6; // here we will get a compile time error due to 'stating typing
//static typing is not accpted in Ts

var count = 6;

var apples:string = "granny has the best apples" // this is an example of full initialization and 
//declaration of out variables in TS


var list: string[] = ['sleep','code','repeat']
// list[0]=9; // this will give an error because we have expilcitly declared that this
//array is an array of strings

var list2: any[] = ['sleep','code','repeat'];

if(list.length<=3){
    list2[0]=99
}

var newString:string = list2[0];

console.log(newString+1); // fun fact // you can redeclare like this.. 
newString = 'bob';
console.log(newString);
console.log(list2);

//apples = 36; // this fives an error because we cannot reassign a var type once declared


//ENUMS - enums allow us to make constants in TS
// this is the old way of declaring enums in TS

const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;


// the nee way to declare enums in TS

enum Colors {'Red', 'Blue','Green'}
console.log(Colors.Red); //this prints 0 brcuase Red is the first element in the enum


/**
 * Enums are useful when we want to set a list/grouping of named constraints in out application
 * Enums make is easier to document states of events throughout our app's runtime
 * ex: In video games, devs would normally track if the game is IN_PLAY, PAUSED, STARTED, or GAME_OVER
 * 
 * enums are used in logical statements ( if else , switch etc)
 */

enum Color {Red=10, Blue, Green, Purple, Gold, Brown, Black}
console.log(Color.Brown)