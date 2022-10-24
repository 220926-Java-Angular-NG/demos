"use strict";
/**
 * The syntax for importing a module;
 *
 * import { export name } from "filePathwithoit its extension"
 *
 * For example - import {Employee} from "./module"
 */
exports.__esModule = true;
//importing individually
// import { currentAge } from "./modules";
// import { happyBirthday } from "./modules";
// import { Transportation} from "./modules"
// importing the entire module as a variable

var ModExample = require("./modules");

console.log(ModExample.currentAge); // 30
console.log(ModExample.happyBirthday(24)); //25 
var car = new ModExample.Transportation("Homer the Honda", 4, 2);
console.log(car.getFacts());
