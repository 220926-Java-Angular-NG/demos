/**
 * The syntax for importing a module;
 * 
 * import { export name } from "filePathwithoit its extension"
 * 
 * For example - import {Employee} from "./module"
 */

//importing individually

import { currentAge } from "./modules";
import { happyBirthday } from "./modules";
// import { Transportation} from "./modules"

// importing the entire module as a variable

import * as ModExample from "./modules"


console.log(currentAge); // 30

console.log(happyBirthday(24)); //25 

let car = new ModExample.Transportation("Homer the Honda",4,2);
console.log(car.getFacts())