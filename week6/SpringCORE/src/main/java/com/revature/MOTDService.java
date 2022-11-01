package com.revature;

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

public class MOTDService {

    private final List<String> messages = new ArrayList<>();
    private int defaultMOTDIndex; // this will start at 0, but we will inject the correct property value as defined in our xml

    public String getMessage(int index){  // size 5 - 1  (0-4),
        // index not within the bounds
        if(index < 0 || index > (messages.size() - 1)){
            return messages.get(defaultMOTDIndex);
        } else { // within the bounds
            return messages.get(index);
        }
    }

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


    // injection simply means we're getting the value from elsewhere
    // this can objects or any value

    // Spring has different ways of performing dependency injection
    // Constructor Injection
    // Setter Injection (instead of setting values via passing in the ctor, we create the blank object, then set properties later)

    public void setDefaultMOTDIndex(int defaultIndex){
        this.defaultMOTDIndex = defaultIndex;
    }
}
