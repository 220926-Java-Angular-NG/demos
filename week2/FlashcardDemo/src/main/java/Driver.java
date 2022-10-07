import com.revature.controllers.FlashCardController;
import com.revature.controllers.UserController;
import com.revature.models.FlashCard;
import com.revature.models.User;
import com.revature.repos.FlashCardRepo;
import com.revature.repos.UserRepo;
import com.revature.services.UserService;
import io.javalin.Javalin;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.List;

public class Driver {


    public static void main(String[] args){

        Javalin app = Javalin.create().start(8080);

        UserService userService = new UserService();
        UserController userController = new UserController(userService);

        FlashCardController cardController = new FlashCardController();

        //users uris
        app.get("/users",userController.getAllUsers);
        app.get("/user/{id}",userController.getUserById);
        app.post("/user",userController.createNewUser);
        app.put("/user",userController.updateUser);
        app.delete("/user", userController.deleteUser);
        app.delete("/user/{id}", userController.deleteUserById);

        //flashcard uris
        app.get("/flashcards", cardController.createNewFlashCard);
        app.post("/flashcard",cardController.createNewFlashCard);

        /**
         * public: Available anywhere
         * protected: Access within the same package and the class's subclasses
         * default: Access only within the same package.
         * private: Access only within the same class.
         */





    }


}
