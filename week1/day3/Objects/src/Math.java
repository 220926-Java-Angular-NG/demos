public class Math {

    // static means it belongs to the CLASS not the INSTANCE
//    public static int sum(int a, int b, int c, int d){
//        return (a + b + c + d);
//    }

//    public static int sum(int[] numbers){
//        int sum = 0;
//
//        for(int i =0; i < numbers.length; i++){
//            sum += numbers[i];
//        }
//
//        return sum;
//    }

    // this ... implies that there could be 0 - infinite arguments
    // varying arguments (varargs)
    public static int sum(int ...numbers){
        int sum = 0;
        for(int i =0; i < numbers.length; i++){
            sum += numbers[i];
        }
        return sum;
    }
}
