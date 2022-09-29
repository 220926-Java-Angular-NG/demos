
public class Horse {
    // properties
    int numberOfLegs;
    int age;
    String name;
    String coatColor;
    String coatType;
    String breed;
    boolean isRaceHorse;

    // behaviors
    void printInfo(){
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Breed: " + breed);
        System.out.println("Is A Racehorse: " + isRaceHorse);
    }

    void birthday(){
        age++;
    }
}
