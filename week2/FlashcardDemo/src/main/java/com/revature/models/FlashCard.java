package com.revature.models;

public class FlashCard {
   private int id;
   private String question;
   private String answer;
   private int creatorId;

    public FlashCard() {
    }

    //retrieving
    public FlashCard(int id, String question, String answer, int creatorId) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.creatorId = creatorId;
    }

    //creating or sending to the db
    public FlashCard(String question, String answer, int creatorId) {
        this.question = question;
        this.answer = answer;
        this.creatorId = creatorId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public int getCreatorId() {
        return creatorId;
    }

    public void setCreatorId(int creatorId) {
        this.creatorId = creatorId;
    }

    @Override
    public String toString() {
        return "FlashCard{" +
                "id=" + id +
                ", question='" + question + '\'' +
                ", answer='" + answer + '\'' +
                ", creatorId=" + creatorId +
                '}';
    }
}
