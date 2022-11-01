package com.revature;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

@Component
public class Driver {
    private MOTDService service;

    public Driver(MOTDService service){
        this.service = service;
    }

    public static void main(String[] args) {
        /*
         *      In Spring there exists a concept called Component Scanning
         *      What is a Component??? -> Beans that have been wired/constructed automatically
         *
         *      Stereotype Annotations??? -> class level annotations that designate a class to be picked up
         *      by the Component Scanning and wired up into the application context
         *
         *      @Component - Base level, generic annotation for enabling a class to be a component
         *      @Repository
         *      @Service
         *      @Controller
         *      @RestController
         *
         *      By default, component scanning is disabled, so WHEN we configure our application context
         *      We need to tell it to scan for components
         */

        /*
                We still need our application context
                We need to point it to a configuration source -> Annotation
                We need to scan with the context
         */
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
        context.scan("com.revature");
        context.refresh();

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
