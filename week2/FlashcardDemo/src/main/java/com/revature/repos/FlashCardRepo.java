package com.revature.repos;

import com.revature.models.FlashCard;
import com.revature.utils.CRUDDaoInterface;
import com.revature.utils.ConnectionManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class FlashCardRepo implements CRUDDaoInterface<FlashCard> {

    private static final Logger LOGGER = LoggerFactory.getLogger(FlashCardRepo.class);
    Connection conn;

    public FlashCardRepo(){


        // Note: certain methods throw errors because there are different instances of what can go wrong
        // in order to handle those errors in a way that saves the application from crashing
        // we wrap those methods or blocks of code in a "try{}catch(){}"block
        try {

            // this is the code that can throw an error
            conn = ConnectionManager.getConnection();
//            System.out.println(conn.getSchema());

        }catch(SQLException sqlException){
          LOGGER.error(sqlException.getMessage());

        }
    }


    @Override
    public int create(FlashCard flashCard) {
        try {
            String sql = "INSERT INTO flashcards (id,question,answer,creator_id) VALUES (default,?,?,?)";

            // not when we are using the method .executeUpdate()
            // we are not given a ResultSet therefore we need to instruct the DB to return one to us
            PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            pstmt.setString(1, flashCard.getQuestion());
            pstmt.setString(2, flashCard.getAnswer());
            pstmt.setInt(3,flashCard.getCreatorId());

            pstmt.executeUpdate();

            ResultSet rs = pstmt.getGeneratedKeys();

            rs.next();

            return rs.getInt(1);


        } catch(SQLException sqlException){
            System.out.println(sqlException.getMessage());
        }

        return 0;
    }

    @Override
    public List<FlashCard> getAll() {

        List<FlashCard> cards = new ArrayList<FlashCard>();

        try {
            String sql = "SELECT * FROM flashcards";
            PreparedStatement pstmt = conn.prepareStatement(sql);

            ResultSet rs = pstmt.executeQuery();

            while (rs.next()){
                FlashCard flashCard = new FlashCard();
                flashCard.setId(rs.getInt("id"));
                flashCard.setQuestion(rs.getString("question"));
                flashCard.setAnswer(rs.getString("answer"));
                flashCard.setCreatorId(rs.getInt("creator_id"));
                cards.add(flashCard);
            }
            return cards;

        }catch(SQLException sqlException){
            System.out.println(sqlException.getMessage());
        }

        return null;
    }

    @Override
    public FlashCard getById(int id) {

        try {

            String sql = "SELECT * FROM flashcards WHERE id = ?";
            PreparedStatement pstmt = conn.prepareStatement(sql);
            pstmt.setInt(1,id);

            ResultSet rs = pstmt.executeQuery();

            FlashCard flashCard = new FlashCard();

            while(rs.next()){
                flashCard.setId(rs.getInt("id"));
                flashCard.setQuestion(rs.getString("question"));
                flashCard.setAnswer(rs.getString("answer"));
                flashCard.setCreatorId(rs.getInt("creator_id"));
            }

            return flashCard;

        }catch(SQLException sqlException){
            System.out.println(sqlException.getMessage());
        }

        return null;
    }



    @Override
    public FlashCard update(FlashCard flashCard) {

        try {
            String sql = "UPDATE flashcards SET answer = ? WHERE id = ?";
            PreparedStatement pstmt = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            pstmt.setString(1, flashCard.getAnswer());
            pstmt.setInt(2,flashCard.getId());

            pstmt.executeUpdate();

            ResultSet rs = pstmt.getGeneratedKeys();

            while (rs.next()){
                flashCard.setAnswer(rs.getString("answer"));
            }

            return flashCard;

        }catch(SQLException sqlException){
            System.out.println(sqlException.getMessage());
        }

        return null;
    }

    @Override
    public boolean delete(FlashCard flashCard) {

    try{
        String sql = "DELETE FROM users WHERE id = ?";
        PreparedStatement pstmt = conn.prepareStatement(sql);
        pstmt.setInt(1,flashCard.getId());

        //note that false is returned because a resultSet is NOT returned when this statement is executed
        pstmt.execute();

        return true;

    }catch(SQLException sqlException){
        System.out.println(sqlException.getMessage());
    }
        return false;
    }
}
