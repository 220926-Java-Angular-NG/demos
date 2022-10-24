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

//The export keyword

// variable

export const currentAge = 30;


//function

export function happyBirthday(age:number) : number {
    return ++age;
}


//classes 
export class Transportation{
    //fields

        name:string;
        wheels:number;
        doors:number;

        //constructor(s)

        constructor(name:string, wheels:number, doors:number){
            this.name = name;
            this.wheels = wheels;
            this.doors = doors;
        }


        //method
        // the values behind the semi colon is the expected return type of the method
        getFacts():string {
            return `${this.name} has ${this.wheels} wheels and ${this.doors} doors`;
        }

}