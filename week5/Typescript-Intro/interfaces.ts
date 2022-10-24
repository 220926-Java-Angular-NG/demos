/**
 * Interfacr is TS are an abstract type that tells the compiler which propertyname a 
 * given object can have - aka: a way for us to have precomprised JS objects without worry 
 * about implementation
 * 
 */

// declare an interface

interface Person {
    name:string;
    title:string;
    salary:number;
    funFacts:any[];
}



//implement the interface

const user: Person = {
    name: "Tiffany",
    title:"Software Engineer",
    salary: 100_000,
    funFacts: [33,'love to sing and dance','need to shop',true]
}

console.log(user);


const newUser:Person = {
    name: "Matt",
    title: "Full Stack Developer",
    salary:500_000_000,
    funFacts:[22,"travled to Japan", 'impatient', true]

}

console.log(newUser);