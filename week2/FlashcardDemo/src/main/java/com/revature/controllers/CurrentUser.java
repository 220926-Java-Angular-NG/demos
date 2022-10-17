package com.revature.controllers;

import com.revature.models.User;

public class CurrentUser {

    public static User currentUser;

    private CurrentUser(){
    }

    public  CurrentUser(User user){
        this.currentUser = user;
    }
}
