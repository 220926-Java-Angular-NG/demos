package com.revature.services;

import com.revature.models.FlashCard;
import com.revature.repos.FlashCardRepo;

import java.util.List;

public class FlashCardService {

   private FlashCardRepo flashCardRepo;

    public FlashCardService(){
        flashCardRepo = new FlashCardRepo();
    }

    public FlashCardService(FlashCardRepo flashCardRepo){
        this.flashCardRepo = flashCardRepo;
    }

    //create

    public int createFlashCard(FlashCard flashCard){

        // Let's keep in mind that we can change the return type of our
        // service methods if we do not want to return
        // exactly what we asked for from the db..

//        if(flashCardRepo.create(flashCard) > 0){
//            return "Awesome flashcard created";
//        };
//
//        return "Booooo!";


        return flashCardRepo.create(flashCard);
    }


    // read All

    public List<FlashCard> getAllFlashCards(){
        return flashCardRepo.getAll();
    }


    //read by id

    public FlashCard getFlashCardById( int id){
        return flashCardRepo.getById(id);
    }


    //update
    public FlashCard updateFlashCard( FlashCard flashCard){

        return flashCardRepo.update(flashCard);
    }

    //delete

    public  boolean deleteFlashCard(FlashCard flashCard){

        return flashCardRepo.delete(flashCard);
    }

}
