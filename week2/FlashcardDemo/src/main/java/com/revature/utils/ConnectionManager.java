package com.revature.utils;


import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class ConnectionManager {

    /**
     *
     * Problem: We are creating a connection to our db each time
     * we want to interact with a different table
     *
     * Solution: Create a first connection and then anytime we need a connection
     * we can refernce that one connection that we created
     *
     * Implementation : Single Design Pattern -> a patter to ensure that only one instance can exist
     *
     *
     * // one static method that we can call in any other class that we'll need our connection
     * // on static variable that is set to be the connection we return
     *
     *
     * 1 - make sure that we cannot make a new ConnectionManager : by creating a private constructor
     * 2 - we need to check to see if the connection was already made
     *      if so we won't make a new connection, instead we'll return the existing one
     *
     *
     * we want to add a properties instance to load our credentials from a separate file
     *
     * because we technically want to protect our credentials we will add them to a jdbc.properties file
     * then add our properties file to our .gitignore
     * */


    private static Connection conn;
    private static Properties properties;


    // we are creating a private constructor because we should npt be able to
    // make another instance of this class
    private ConnectionManager(){

    }



    // create my connection

    public static Connection getConnection() throws SQLException {

        if(properties == null){
            properties = loadProperties();
        }

        if(conn == null || conn.isClosed()){
            conn = DriverManager.getConnection(properties.getProperty("url"),
                    properties.getProperty("username"),
                    properties.getProperty("password")
            );
        }

        return conn;
    }




    // this method is finding my properties file and returning it to me

    private static Properties loadProperties(){

        Properties properties = new Properties();

        try {
            FileInputStream fileInputStream = new FileInputStream("src/main/resources/jdbc.properties");
            properties.load(fileInputStream);

        }catch(IOException fnfException){
            System.out.println(fnfException.getMessage());
        }
        return properties;

    }



}
