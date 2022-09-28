public class Hello {
	// single-line comment
	// information goes in here


	// this is a method that belongs to the Hello class
	// a method is a repeatable action that you want to perform

	// The main method is special in Java, every program needs one
	// it is the entry point of the application
	public static void main(String[] args){
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
	}


	
}