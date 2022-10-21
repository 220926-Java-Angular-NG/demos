package com.revature.controllers;

import com.revature.models.User;
import com.revature.services.UserService;
import io.javalin.core.util.Header;
import io.javalin.http.Handler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class UserController {



    UserService service;

    public UserController(){
        service = new UserService();
    }

    public UserController(UserService userService){
        service = userService;
    }

//create
    public Handler createNewUser = context -> {

        // grab the object from the request body (postman)
        // send the incoming user to our service , so it can
        // reach out to our repo layer and execute the request

    User user = context.bodyAsClass(User.class); //change the json from postman to on object
    int id = service.createUser(user);

    if(id > 0){
        //valid number ( it represents the primary key )
        user.setId(id);
        context.json(user).status(200);
    } else {
        // something went wrong
        context.result("User not created").status(400);
    }

};


    //read

    //all
    public Handler getAllUsers = context -> {



        context.json(service.getAllUsers());
    };



    //by id

    public Handler getUserById = context -> {
        String param = context.pathParam("id");
        User user = context.bodyAsClass(User.class);

        // we are going to wrap this logic in a try catch

        try {
            //this is the id that we are getting from our url
            int id =  Integer.parseInt(param);
            user = service.getUserById(id);

            if(user != null){
                context.json(user).status(202);
            } else {
                context.result("User not found").status(400);
            }

        }catch(NumberFormatException nFException){
            System.out.println(nFException.getMessage());
        }
    };

    //update


    public Handler updateUser = context -> {

        User user = context.bodyAsClass(User.class);

        user = service.updateUser(user);

        if(user != null){
            context.json(user).status(202);
        } else {
            context.result("Could not update user").status(400);
        }
    };



    //delete

    public Handler deleteUser = context -> {
        User user = context.bodyAsClass(User.class);

        // note this should be refactored
        if(user != null ){
            context.status(200).json(service.deleteUser(user));
        } else {
            context.status(400).result("Could not delete user");
        }
    };


    public Handler deleteUserById = context -> {
      String param = context.pathParam("id");

        try {
            //this is the id that we are getting from our url
            int id =  Integer.parseInt(param);

                context.json(service.deleteUserById(id)).status(202);

        }catch(NumberFormatException nFMException){
            System.out.println(nFMException.getMessage());
        }
    };

    public Handler loginUser = context -> {


        User user = context.bodyAsClass(User.class);

        user = service.loginUser(user);

        if(user != null){

           CurrentUser.currentUser = user;
            System.out.println(CurrentUser.currentUser.getFirstname());

            context.json(user);
//            context.result("User has been successfully logged in").status(202);
        } else {
            context.result("Sorry Wrong user name or password").status(404);
        }

    };



}
