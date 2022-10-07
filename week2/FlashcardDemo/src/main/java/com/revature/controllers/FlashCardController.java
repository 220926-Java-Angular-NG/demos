package com.revature.controllers;

import com.revature.models.FlashCard;
import com.revature.services.FlashCardService;
import io.javalin.http.Handler;

import java.util.List;

public class FlashCardController {

    FlashCardService service;

    public FlashCardController(){
        service = new FlashCardService();
    }

    public FlashCardController(FlashCardService service){
        this.service = service;
    }


    //create

   public Handler createNewFlashCard = context -> {

        // first make a FlashCard object from the json sent in the request body
        FlashCard newCard = context.bodyAsClass(FlashCard.class);

        // the service is used to call the methods in our repository
          int id = service.createFlashCard(newCard);

          if(id>0){
              context.result("Your flashcard was created!").status(202);
          } else {
              context.result("Your flashcard could not be created").status(404);
          }


    };





    //read

    public Handler getAllFlashCards = context -> {

        List<FlashCard> cards = service.getAllFlashCards();

        if(cards != null){
            context.json(cards);
        } else {
            context.result("Could not load cards").status(404);
        }

    };



   public Handler getFlashCardById = context -> {

        String param = context.pathParam("id");

        try {
            int id = Integer.valueOf(param);
            FlashCard card = service.getFlashCardById(id);

            if(card != null){
                context.json(card).status(202);
            } else {
                context.result("Could not find flashcard");
            }

        }catch(NumberFormatException nFException){

            System.out.println(nFException.getMessage());
        }


    };





    //update

   public Handler updateFlashCard = context -> {

       //creating a model of our flashcard using the json from the request body
        FlashCard card = context.bodyAsClass(FlashCard.class);

        // we are assigning the card we just created above to the updated card
       // we get from the db when we run our update method -
        card = service.updateFlashCard(card);

        if(card != null){
            context.json(card).status(202);

        }else{
            context.result("Unable to update flashcard");
        }

    };




    //delete

   public Handler deleteFlashCard = context -> {

        FlashCard card = context.bodyAsClass(FlashCard.class);

       if(card != null){

           if(service.deleteFlashCard(card)){
               context.result("Flashcard with id: " + card.getId() + " has been deleted");
           } else {
               context.result("Could not delete flashcard");
           }

       } else {
        context.result("No flashcard was added for deletion");
       }

    };


}
