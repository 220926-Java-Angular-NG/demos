import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

// This class is called a Test Suite -> a collection of individual tests
public class MathTests {
    // Individuals tests are written as methods, where the name is a semantic description of what is being done


    // when naming tests -> what is given? what are we doing with what is given? and what is our expected result?

    // get the numbers
    // we need to call sum
    // we need to store the result in a variable we will call result
    // we need to compare the result to our expected -> 113
    // if it matches, we passed, if not, we failed
    @Test
    // the @Test annotation goes over top of all of our TEST method
    public void whenGivenNumbersTenTwelveThirtySevenAndFiftyFourSumReturnsOneHundredThirteen(){
        int a = 10;
        int b = 12;
        int c = 37;
        int d = 54;
        int expected = 113;

        // all you need to do to call a static method, is reference the class itself
        int actual = Math.sum(a,b,c,d);

        // Java doesn't have a lot of built-in testing functionality
        // if we want that functionality, we need to use a library
        // the library we're using -> JUnit

        // JUnit has a library called Assertions!!!!!!
        // I can use asserts to confirm the efficacy or validity of results
        // assertEquals -> (expected, actual) -> if they are equal, we pass
        // assertNotEquals
        // assertTrue
        // assertFalse
        Assertions.assertEquals(expected, actual);
    }

    @Test
    public void whenGivenFiveArgumentsSumReturnsValidResult(){
        int actual = Math.sum(1,2,3,4,5);
        int expected = 15;

        Assertions.assertEquals(expected, actual);
    }
}
