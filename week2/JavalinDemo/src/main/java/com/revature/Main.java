package com.revature;


import io.javalin.Javalin;
import io.javalin.http.Cookie;
import io.javalin.http.Handler;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Using a factory -> factory creates objects in a specific way
        // A port is an extension of a URL -> localhost:8080
        // port 8080 is the standard for backend APIs
        // this method create a web server from our application
        Javalin app = Javalin.create(
                config -> {
                    config.contextPath = "/";
                    config.enableCorsForAllOrigins();
                }
        ).start(8080);

        List<User> users = new ArrayList<>(); // take this list
        User u1 = new User("mickey", "mouse");
        User u2 = new User("minnie", "mouse");
        User u3 = new User("bpinkerton", "1234");
        users.add(u1);
        users.add(u2);
        users.add(u3);

        // we can configure locations to receive types of requests, and do something as a result
        // context -> an object to access EVERYTHING you need within the request and the response
        app.get("/", context -> {
            context.result("Welcome to the Javalin Demo");
        });

        // Resource Identification
        // URI -> Uniform Resource Identifier
        // URL -> Uniform Resource Location

        app.before("/users", context -> {

        });

        app.get("/users", context -> {
            // Javalin has a built-in object mapper capable of automatically mapping your objects to JSON
            // context.json(Object) will take the object, convert it to JSON, and load it into the response body
            context.json(users);
        });

        app.post("/users", context -> {
            // grab the user from the body
            // add the user to the list
            User user = context.bodyAsClass(User.class);
            users.add(user);
        });

        app.post("/login", context -> {
            User user = context.bodyAsClass(User.class);

            for(User u: users){
                if(u.getUsername().equals(user.getUsername()) && u.getPassword().equals(user.getPassword())){
                    context.cookieStore(u.getUsername(), u);
                }
            }
        });

        // Data Interchange Format -> Any medium through which you exchange DATA
        //      XML -> we can markup information
        //      HTML -> ^^
        //      JSON -> JavaScript Object Notation -> Objects as special Strings
        //   EX:
        /*
                {} -> denote an object
                [] -> denote an array/list

                [
                    {
                        "username": "mickey",
                        "password": "mouse"
                    },
                    {
                        "username": "minnie",
                        "password": "mouse"
                    }
                ]

         */
    }
}

class User{
    String username;
    String password;

    public User() {
    }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}