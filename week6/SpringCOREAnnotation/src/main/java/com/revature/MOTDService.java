package com.revature;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 *    MOTDService houses a list of messages that can be called on.
 *
 *    We should be able to get messages by their index (0-4)
 *
 *    If an index is provided that's out of bounds, we could give them
 *    a message based on a default index
 *
 *    we need a list of messages will be empty by default until we run init()
 *
 *    we need a property for the default index which will be 0, until its set
 *
 *    we need a method to retrieve (get motd)
 *
 *    we're going to have an init method (similar to constructor but needs to be invoked somewhat manually
 */

@Service
public class MOTDService {

    private final List<String> messages = new ArrayList<>();
    private int defaultMOTDIndex;

    public String getMessage(int index){  // size 5 - 1  (0-4),
        // index not within the bounds
        if(index < 0 || index > (messages.size() - 1)){
            return messages.get(defaultMOTDIndex);
        } else { // within the bounds
            return messages.get(index);
        }
    }

    // annotation to instruct the IoC to run this method post-construct, I.E. after constructing the bean and setting properties
    @PostConstruct
    public void initMessages(){
        messages.addAll(
                // which of these should be default?? 3 default motd index
                Arrays.asList(
                        "Good Morning",
                        "It seems impossible until it's done",
                        "You always pass failure on your way to success",
                        "Positive anything is better than negative nothing",
                        "The first step of the journey is always the most difficult"
                )
        );
    }

    // @Value does not need to be supplied with an immediate value, we can retrieve a value from elsewhere
    // like a .properties file
    @Value("${whatever:4}")
    public void setDefaultMOTDIndex(int defaultIndex){
        this.defaultMOTDIndex = defaultIndex;
    }
}

