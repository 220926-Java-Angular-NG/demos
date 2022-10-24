/**
 * TypeScript  is a super set of Javascript
 * This meams that allll Javascript is valid TypeScript
 * 
 * 
 * //We use Typescript to develope our front end however 
 * //Web browsers vannot convert, read, or understand TS
 * // therefore we must transpile our TS to JS
 * 
 * 
 * TS is an OOP language - it allows for OOP deatures suvj as interfaces , classes, generics etc
 * TS is stringly typed - meaning once a variable is declared a certain type it cannot be changed
 *  unlike JS
 * 
 * 
 * // to download typescript so we can use it 
 * // 'npm install -g typescript'
 * 
 * Steps we will follow to transpile our TS code into JS code
 * 
 *  1. Call the typescript compile to transpile our ts to js
 *      - tsc nameOffile.ts
 * 
 * 2. When we run the anove command we will get a .js file created in our 
 * folder with the same name as out .ts file - 
 * to actually excute the code we will run the following command
 *      - node nameOfFile.js
 * 
 */

function sayHi(message:String) {
    return `Hi this is your message: ${ message}`
}

console.log(sayHi("This is Angular Week !"))