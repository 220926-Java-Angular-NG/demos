package com.revature;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Driver {

    // I am NOT going to instantiate the service myself, I am going to rely on ctor injection
    // I.E. Driver will be injected with the instance of MOTDService that exists within the ApplicationContext
    private MOTDService service;

    // Manual constructor injection via XML Wiring
    public Driver(MOTDService service){
        this.service = service;
    }

    public static void main(String[] args) {
        // spin up the application context
        // constructing a literal application context object
        //      we need to point the constructor to a configuration source
        //                                              application-context.xml
        // once the application context is constructed, it should have all of our beans wired based on our config

        ApplicationContext context = new ClassPathXmlApplicationContext("application-context.xml");

        MOTDService motdService = context.getBean(MOTDService.class, "MotdServiceBean");
        // test that the default motd index was set -> call with an index out of bounds
        System.out.println(motdService.getMessage(5)); // -> Positive anything ... etc
        // test that the service works with a valid index
        System.out.println(motdService.getMessage(1)); // -> It seems impossible ... etc

        Driver driver = context.getBean(Driver.class);

        System.out.println(motdService); // what prints? -> hashCode
        System.out.println(driver.service); // what prints? -> the same hashCode
        //                                      what does this tell us? pointing to the same object i.e. SINGLETON


    }
}
