/**
 * We know that TS is an object oriented programming language.
 * The 'class' keyword is used to declare a class in TS
 * An instance if a class can be created usng the 'new' keyword
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//create our object using our defined class
var bike = new Transportation("Billy the Bike", 2, 0);
console.log(bike.getFacts());
//Inheritance is TS 
/**
 * In TS , we can implement an inheritence hierarchy using the entends keyword
 * similar to other OOP languages
 */
var Airplane = /** @class */ (function (_super) {
    __extends(Airplane, _super);
    function Airplane() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Airplane.prototype.getFacts = function () {
        return "I'm so fly, im not giving you any facts";
    };
    return Airplane;
}(Transportation));
var airplane = new Airplane("Ally the Airplane", 6, 4);
console.log(airplane.getFacts());
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
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.dept_id = 123;
        this.name = name;
    }
    return Employee;
}());
var emp1 = new Employee("Justin Pan");
console.log(emp1);
