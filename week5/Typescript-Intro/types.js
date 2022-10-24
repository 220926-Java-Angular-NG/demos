//count = 6; // here we will get a compile time error due to 'stating typing
//static typing is not accpted in Ts
var count = 6;
var apples = "granny has the best apples"; // this is an example of full initialization and 
//declaration of out variables in TS
var list = ['sleep', 'code', 'repeat'];
// list[0]=9; // this will give an error because we have expilcitly declared that this
//array is an array of strings
var list2 = ['sleep', 'code', 'repeat'];
if (list.length <= 3) {
    list2[0] = 99;
}
var newString = list2[0];
console.log(newString + 1); // fun fact // you can redeclare like this.. 
newString = 'bob';
console.log(newString);
console.log(list2);
//apples = 36; // this fives an error because we cannot reassign a var type once declared
//ENUMS - enums allow us to make constants in TS
// this is the old way of declaring enums in TS
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
// the nee way to declare enums in TS
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Green"] = 2] = "Green";
})(Colors || (Colors = {}));
console.log(Colors.Red); //this prints 0 brcuase Red is the first element in the enum
/**
 * Enums are useful when we want to set a list/grouping of named constraints in out application
 * Enums make is easier to document states of events throughout our app's runtime
 * ex: In video games, devs would normally track if the game is IN_PLAY, PAUSED, STARTED, or GAME_OVER
 *
 * enums are used in logical statements ( if else , switch etc)
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Blue"] = 11] = "Blue";
    Color[Color["Green"] = 12] = "Green";
    Color[Color["Purple"] = 13] = "Purple";
    Color[Color["Gold"] = 14] = "Gold";
    Color[Color["Brown"] = 15] = "Brown";
    Color[Color["Black"] = 16] = "Black";
})(Color || (Color = {}));
console.log(Color.Brown);
