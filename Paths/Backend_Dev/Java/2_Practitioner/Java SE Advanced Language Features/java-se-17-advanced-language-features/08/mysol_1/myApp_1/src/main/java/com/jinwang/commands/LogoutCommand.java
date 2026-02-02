package com.jinwang.commands;

import com.jinwang.Command;
import com.jinwang.SessionState;
import com.jinwang.UserInput;

@Command(value = "logout", order = 90, description = "Logout and exit.")
public class LogoutCommand implements CommandExecutor {

    @Override
    public void execute(SessionState sessionState, UserInput userInput) {
        System.out.println("Thank you and goodbye!");
        sessionState.setFinished(true);
    }
}
