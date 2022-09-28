public class Main {
    // The main method is special in Java, every program needs one
    // it is the entry point of the application
    public static void main(String[] args) {
            // single-line comment
        // information goes in here


        // this is a method that belongs to the Hello class
        // a method is a repeatable action that you want to perform


        // This is a method invocation

            boolean something = true;
            System.out.println(something);

            // variables -> are portable, reusable values
            // <data type> <name of the variable> = <value>
            String name = "Brandon";


            System.out.println(name);
            name = name + " is great."; // +=
            System.out.println(name);

            // Java is an object oriented language -> we create classes to act
            //	as blueprints and we create objects from those blueprints...
            // But NOT EVERYTHING IN JAVA IS AN OBJECT

            // Primitive data types are basic

            //								size						range

            // whole numbers					-> 1
            //	byte						1 byte  (8 bit)      -128 : 127
            //	short						2 bytes (16 bits)    -32768 : 32767
            // int (default)			4 bytes (32 bits)		*
            // long						8 bytes (64 bits)		*

            // floating point (decimal)    -> $ 1.99
            // float						4 bytes (32 bit)
            // double (default)		8 bytes (64 bit)

            //	single ASCII value			 -> a, $, 1
            // char						2 bytes (16 bit)

            // true OR false
            // boolean					1 bit
            byte b = 10;
            short s = 32767;
            long l = 10;
//            int i = (int) l; // this is an explicit type-cast

            // implicit -> automatically
            // explicit -> manually
            float f = 3.14f;
            double d = 3.14;

            char c = 'a';
            boolean boo = true;
            Boolean boo2 = boo; // this is a wrapper class
            boolean boo3 = boo2; // primitives

            // this is a string
            String hello = "UNIC0RN";
            System.out.println(hello + " is " + hello.length() + " characters long!");
            // Camel-case is used for VARIABLES and METHODS -> thisIsCamelCase
            // Pascal-case is used for Classes, Interfaces and Abstract Classes -> ThisIsPascalCase
            System.out.println(hello.contains("CORNY"));
            int index = hello.indexOf(0);
            hello = hello.replace('0', ' '); // -> create UNIC RN -> then we point hello to the new value
            System.out.println(hello);


            // hello.replace('0', ' '); this alone does not change the string
            // Strings in Java are immutable -> CAN'T BE CHANGED
            // String are sequences of characters -> CharSequence -> an array of characters

            // Arrays -> a series of contiguous 'like' elements
            // <datatype>[] <name of variable>;
            // we must define the shape/size of the array upon instantiation
            int[] intArr = new int[5]; // this creates an array of integers of size 5
            // we use index notation to grab elements out of an array OR put elements in
            // arrays are 0 indexed
            intArr[0] = 1; // 0th index
            intArr[1] = 2;
            intArr[2] = 3;
            intArr[3] = 4;
            intArr[4] = 5;

            String[] daysOfTheWeek = {"Monday", "Tuesday", "", "Thursday", "Friday"}; // assign values upon declaration
            // we have created an array with values *listed above* -> length 3, maxIndex 2;

            System.out.println(intArr[intArr.length - 1]); // because arrays are of fixed size,
            // if we go outside the bounds -> we get an ArrayIndexOutOfBoundsExceptions

            // Programming is a combination of two things
            // Iteratives               repeat          while, do-while, for-loops, *for-each,  *recursion
            // Conditionals             logic gates     if, if-else, if-else-if, switch,        *ternary

            // while(condition){ **code you want to repeat** }   -> While loops CHECK then RUN
            // iterator -> some sort of number to assist you with ending a loop
            int i = 0; // i can use this iterator as the index
            do {
                    System.out.println(daysOfTheWeek[i]);
                    i += 1; // get to the next index
            } while (i < daysOfTheWeek.length);


            // do {**code you want to repeat**} while(condition); -> RUN then CHECK
            System.out.println("---");
            while(i < daysOfTheWeek.length){    // goal is to print each day of the week // week[0] -> week[1] -> week[2]
                    System.out.println(daysOfTheWeek[i]);
                    i += 1; // get to the next index
                    // we need a way to stop when we want to
            }

            // for(instantiation of an iterator; condition; increment/decrement) { **code you want to repeat** }
            for(int j = 0; j < daysOfTheWeek.length;j++){
                    System.out.println(daysOfTheWeek[j]);
            }


            if(true){
                    // run some side thing
            } else if(true) {

            } else if(true) {

            } else if(true) {

            } else if(true) {

            } else if(true) {

            } else {

            }

            // switch(variable){ **cases** }
            // variable can only be of specific types
            String dayOfTheWeek = "Airplane";
            switch(dayOfTheWeek){
                    case "Monday":
                            System.out.println("Boo, it's monday :/");
                    case "Tuesday":
                            System.out.println("Ok this is a bit better.");
                    case "Wednesday":
                            System.out.println("It's hump day.");
                            break;
                    case "Thursday":
                            System.out.println("Friday's Eve");
                            break;
                    case "Friday":
                            System.out.println("FriYAY!!!!!!");
                            break;
                    default:
                            System.out.println("Breh I'm already at the river...");
            }
        }
}