
// What does it mean to be an animal
// we can use animal as a BASE CLASS or PARENT CLASS
// When the purpose of a class is to MODEL DATA -> they are called models

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

// IS-A principle of inheritance
public class Animal {
    static int x = 5;
    public static void main(String[] args) {
        //              Animal() -> special kind of method called a constructor -> it

        for(int x = 10; x < 11; x++){
//            System.out.println(x);
        }
//        System.out.println(x); // which X am I talking about? -> the most immediate

        for(int y = 5; y < 6; y++){
//            System.out.println(x);
        }

        Animal a = new Animal();
        a.lifeExpectancy = 150;
        a.age = 10;

        // this is us INVOKING the constructor that we DEFINED in the class itself
        Cat c = new Cat(1, 20, 9, 30, "Sauerkraut");
        Cat c2 = new Cat(3, 20, 9, 29, "The Duke");
        Cat c3 = new Cat(5, "Bruce");

        // what is accessible on an object is derived from the reference type
        Cat c4 = new Cat();
        Animal c5 = c4;


        // what is in the heap? -> an animal
        // what does my reference allow me to access? -> cat stuff
        //        Cat c6 = new Animal();


        System.out.println(c4.numberOfWhiskers);
        c4.eat(); // nom nom.. mew
        c5.eat(); // nom nom.. mew

        // There is a difference in Java between EQUALITY and EQUIVALENCY
        //


        c.eat();
//        System.out.println(c3.lifeExpectancy);

        int y = c.purr();
//        System.out.println(y);

        Example e = new Example();
    }

    // properties
    int age;
    int lifeExpectancy;
    String name;

    public Animal(){
        super();
    }


    // behaviors that ALL animals share
    void eat(){
        System.out.println("yummy, this is tasty.");
    }

    void sleep(){

    }
}

// CLASSES can be EXTENDED by a SUB-CLASS
class Cat extends Animal{
    int numberOfLives = 9;
    int numberOfWhiskers = 30;


    // polymorphism -> Overloading
    public Cat(){
        super(); // this happens implicitly
        this.lifeExpectancy = 20;
    }

    // There a concept called scope ->
    // a constructor definition
    public Cat(int age, int lifeExpectancy, int numberOfLives, int numberOfWhiskers, String name){
        this(age, name);
        this.lifeExpectancy = lifeExpectancy;
        this.numberOfLives = numberOfLives;
        this.numberOfWhiskers = numberOfWhiskers;
    }

    public Cat(int age, String name){
        this(); //another way to set defaults
        this.age = age;
        this.name = name;
        // ONE way to set default values
        //        this.lifeExpectancy = 20;
        //        this.numberOfLives = 9;
        //        this.numberOfWhiskers = 30;
    }

    public Cat(String name, int age){

    }

    // this is a method definition
    int purr(){
        return 10;
    }

    void purr(int num){

    }

    void purr(String word){

    }

    @Override
    void eat(){
        System.out.println("Nom nom.... mew.");
    }

}

class Example{

    // java creates a default constructor
    // the default constructor is a method that takes 0 arguments, and constructs with default property values
    // this is an example of the default constructor
    // a constructor should always be public <name of the class>(){ }
    public Example(){

    }
}


