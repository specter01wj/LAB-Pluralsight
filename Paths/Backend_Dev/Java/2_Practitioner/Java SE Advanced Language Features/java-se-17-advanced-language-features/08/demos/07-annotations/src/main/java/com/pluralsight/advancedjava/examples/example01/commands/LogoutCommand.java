/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01.commands;

import com.pluralsight.advancedjava.examples.example01.Command;
import com.pluralsight.advancedjava.examples.example01.SessionState;
import com.pluralsight.advancedjava.examples.example01.UserInput;

@Command(value = "logout", order = 90, description = "Logout and exit.")
public class LogoutCommand implements CommandExecutor {

    @Override
    public void execute(SessionState sessionState, UserInput userInput) {
        System.out.println("Thank you and goodbye!");
        sessionState.setFinished(true);
    }
}
