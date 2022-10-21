class Employee {
    // JS classes give us the ability to incorporate OOP in JS
    // this was introduced in ES6 
    // resulting , we can make constructors and add functions to our classes

    constructor(name,age,course){
        this.name = name;
        this.age = age;
        this.course = course;
    }

    displayInfo(){
        return `${this.name} is ${this.age} years old and is training in ${this.course}`
    }


}

// lets use our class

let employee = new Employee("Employee", 100, "Full Stack");
let employee2 = new Employee("Ned")
console.log(employee.displayInfo());
console.log(employee2.displayInfo());

/*

Why use JS classes?
    - offers an improved means for creating object templates
    - we can have like objects that have slight variances
    - make our code more manageable and reusable in other parts of the JS code


    // there is also inheritance in JS using the 'extends' keyword

*/

class Associate extends Employee{

    displayInfo(){
        return `${this.name} is ${this.age} years old. They are an associate at Revature training in ${this.course}`
    }
}

let associate = new Associate("Matt",25,"JavaScript")
console.log(associate.displayInfo());

// when checking to see the instanceof or to see if an object is an instnace of an ObjectType
// the syntax is to set a variable = to the boolen returned when 
//checking that the object is an instance of the Object typ

// var [varname] = [objectname(instance of the class)] instanceof [objecttype (class)]
var myVar = associate instanceof Employee

// short hard is not setting it == to a variable (associate instanceof Employee)

class Artist {

}
var myVar2 = associate instanceof Artist
console.log(myVar2);
 
// We can convert our Class data into JSON
//converting data into json
console.log(employee);
// console.log(JSON.stringify(employee));
 
let objectToJson = JSON.stringify(employee)
console.log(objectToJson)
//turning our JSON into a JS object
// we have to 'parse' the json
var jsonToObject = JSON.parse(objectToJson)
console.log(jsonToObject)



