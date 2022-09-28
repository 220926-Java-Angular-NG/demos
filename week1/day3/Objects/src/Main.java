public class Main {
    public static void main(String[] args){
        // primitives vs objects
        // Object consist of two things -> properties(variables) + behaviors(methods)
        // classes -> a definition for how to build -> a blueprint for an object

        // datatype name = <new keyword> <constructor>
        Horse horse1 = new Horse(); // this creates an empty object with default values
        // we can reference properties on it with dot notation
        horse1.age = 5;
        horse1.breed = "Arabian";
        horse1.isRaceHorse = false;
        horse1.name = "Ronald";

        Horse horse2 = new Horse();
        horse2.age = 1;
        horse2.name = "Professionally";
        horse2.breed = "Palomino";
        horse2.isRaceHorse = true;


        Horse[] stable = new Horse[10];

        stable[0] = horse1;
        stable[1] = horse2;

        horse1.printInfo();
        horse1.birthday();
        horse1.printInfo();
    }
}
