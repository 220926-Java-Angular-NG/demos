"use strict";
/**
 * Modules -
 *
 *  In typescript the code we write is globally scoped by default
 * TS provides modules and namespaces to restrict scopes and also organize and maintain large code bases
 * All variables, classes, and funtions declsred ina module are not accessible outside of a modules
 * A modules id created when we use the 'export' keyword and
 * can be used in another file when we used the 'import'  keyword
 *
 */
exports.__esModule = true;
exports.Transportation = exports.happyBirthday = exports.currentAge = void 0;
//The export keyword
// variable
exports.currentAge = 30;
//function
function happyBirthday(age) {
    return ++age;
}
exports.happyBirthday = happyBirthday;
//classes 
var Transportation = /** @class */ (function () {
    //constructor(s)
    function Transportation(name, wheels, doors) {
        this.name = name;
        this.wheels = wheels;
        this.doors = doors;
    }
    //method
    // the values behind the semi colon is the expected return type of the method
    Transportation.prototype.getFacts = function () {
        return "".concat(this.name, " has ").concat(this.wheels, " wheels and ").concat(this.doors, " doors");
    };
    return Transportation;
}());
exports.Transportation = Transportation;
