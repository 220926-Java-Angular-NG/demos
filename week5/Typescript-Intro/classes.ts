/**
 * We know that TS is an object oriented programming language.
 * The 'class' keyword is used to declare a class in TS
 * An instance if a class can be created usng the 'new' keyword
 */

class Transportation{
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

//create our object using our defined class

let bike = new Transportation("Billy the Bike", 2, 0);
console.log(bike.getFacts());

//Inheritance is TS 
/**
 * In TS , we can implement an inheritence hierarchy using the entends keyword 
 * similar to other OOP languages
 */

class Airplane extends Transportation {
    getFacts(): string {
        return `I'm so fly, im not giving you any facts`
    }
}

let airplane = new Airplane("Ally the Airplane",6,4)
console.log(airplane.getFacts())

/**
 * Access Modifers in TS
 * 
 * public -  In TS each member is public by default . We can still mark a mamber public explicitly
 * private - When we mark a memeber private it will not be visible outside of its class
 * protected - A member can only be accessed by its class or deriving classes (sub classes)
 * 
 * Readonly modifier -
 *  We can make properties accessble but immutable by using the readonly keyword
 *  note: Readonly properties must be initialized at their declaration or in the constructor
 */

class Employee {
    readonly name: string;
    // const age: number; class memeber cannot be declared woth the const keyword

    readonly dept_id: number = 123;

    constructor(name:string){
        this.name = name;
    }

}

let emp1 = new Employee("Justin Pan")
console.log(emp1);
//emp1.dept_id = 456 // gives a compile error becuase dept_id is read only aka immutable
//emp1.name = "Tim";