import java.util.*;

public class Driver {
    public static void main(String[] args){

        // A library/API for data storage -> Collections
        // List<DataType> name;
        // All of the Collections can take in a DataType so that the implementation is able to work with variable amount of classes
        // Generics can only be applied to Classes/Objects

        // the difference between == and .equals() ->
        // == compares stack values -> the two objects are the exact same
        // .equals() -> depends on the implementation
//        User u = new User(new String("bpink"));
//
//        User u2 = new User(new String("bpink"));
//
//
//        if(u.getUsername() == u2.getUsername()){
//            System.out.println("they are the same object (EQUALITY)");
//        }
//
//        if(u.getUsername().equals(u2.getUsername())){
//            System.out.println("they match              (EQUIVALENCY)");
//        }


        List<String> daysOfTheWeek = new ArrayList<>(); // arrays
        List<String> daysOfTheWeek2 = new LinkedList<>(); // uses nodes that are linked together

        daysOfTheWeek.add("Monday");
        daysOfTheWeek.add("Tuesday");
        daysOfTheWeek.add("Wednesday");
        daysOfTheWeek.add("Thursday");
        daysOfTheWeek.add("Friday");

//        for(int i = 0; i < daysOfTheWeek.size(); i++){
//            System.out.println(daysOfTheWeek.get(i));
//        }

        // enhanced for loop AKA for-each
        for(String day: daysOfTheWeek){
            System.out.println(day);
        }

//        System.out.println(daysOfTheWeek);

        Set<String> setOfTheWeek = new HashSet<>();
        setOfTheWeek.add("Monday");
        setOfTheWeek.add("Monday");

//        System.out.println(setOfTheWeek);

        daysOfTheWeek.add("Hi");
        daysOfTheWeek2.add("Hi");

        Bean<String> bean = new Bean<>("Hi");
        Bean<Integer> bean2 = new Bean<>(1);
        Bean<Calico> bean3 = new Bean<>(new Calico());

        List<Bean<?>> beanStalk = new ArrayList<>();
        beanStalk.add(bean);
        beanStalk.add(bean2);
        beanStalk.add(bean3);

        for(Bean<?> b: beanStalk){
            b.printTypeOfE();
        }

        BetterThanArrayList<String> myList = new BetterThanArrayList<>();

        // A map is a series of entries that are defined by KEY : VALUE pairs
        Map<String, String> dictionary = new HashMap<>();

        dictionary.put("What is a map?", "A map is a series of entries that are defined by KEY : VALUE pairs");


        System.out.println(dictionary.get("What is a dolphin?"));


//        Cat cat = new Calico();
    }
}

class User{
    private String username;

    public User(String username) {
        this.username = username;
    }

    public String getUsername(){
        return username;
    }
}
// if you are 100% abstract -> you are an interface
// if you are somewhere in the middle -> you are and abstract class
// if you are 0% abstract -> you are called CONCRETE -> they can be instantiated

// An interface is purely definition NOT implementation -> this is ABSTRACT ->

interface Organism{
    void replicate();
}


interface Animal extends Organism{
    void eat();
    void sleep();
}

abstract class Cat implements Animal{

    int age;

    @Override
    public void eat() {
        System.out.println("nom nom");
    }

    @Override
    public void sleep() {
        System.out.println("snore");
    }
}

class Calico extends Cat{
    @Override
    public void replicate() {

    }
}
//
//class Sponge implements Animal{
//
//    @Override
//    public void eat() {
//        System.out.println("I'm filtering right now");
//    }
//
//    @Override
//    public void sleep() {
//        System.out.println("not for me...");
//    }
//}


class Bean<E>{
    E e;



    public Bean(E e){
        this.e = e;
    }

    public void printTypeOfE(){
        System.out.println(e.getClass());
    }

    public void add(E e){

    }
}

class BetterThanArrayList<E>{
}