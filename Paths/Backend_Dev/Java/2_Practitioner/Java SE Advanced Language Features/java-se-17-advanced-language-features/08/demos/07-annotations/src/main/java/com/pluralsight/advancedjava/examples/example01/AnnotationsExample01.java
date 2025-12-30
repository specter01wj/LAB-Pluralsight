/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

import com.pluralsight.advancedjava.examples.ClassUtils;
import com.pluralsight.advancedjava.examples.example01.commands.CommandExecutor;

import java.io.IOException;
import java.util.*;

/**
 * Example 1: Creating your own annotation and working with annotations at runtime.
 */
public class AnnotationsExample01 {

    public static void main(String[] args) throws IOException, ClassNotFoundException {
        // Find the names of all classes in the package com.pluralsight.advancedjava.examples.example01.commands
        Set<String> classNames = ClassUtils.findClassNames("com.pluralsight.advancedjava.examples.example01.commands");

        // Convert the classes that have a Command annotation to Class objects
        List<Class<?>> commandClasses = new ArrayList<>();
        for (String className : classNames) {
            Class<?> cls = Class.forName(className);
            Command annotation = cls.getAnnotation(Command.class);
            if (annotation != null) {
                System.out.printf("Found command: %s, order: %d%n", annotation.value(), annotation.order());
                commandClasses.add(cls);
            }
        }

        // Sort the classes by the value of the 'order' element of their Command annotations
        commandClasses.sort(Comparator.comparingInt(cls -> cls.getAnnotation(Command.class).order()));

        // Main loop of the program
        var sessionState = new SessionState();
        var scanner = new Scanner(System.in);
        while (!sessionState.isFinished()) {
            // Display menu
            System.out.println();
            for (Class<?> cls : commandClasses) {
                Command annotation = cls.getAnnotation(Command.class);
                System.out.printf("%-12s - %s%n", annotation.value(), annotation.description());
            }

            // Display prompt and get input from user
            var userInput = UserInput.readUserInput(scanner);

            // Find and execute the command
            var found = false;
            for (Class<?> cls : commandClasses) {
                Command annotation = cls.getAnnotation(Command.class);
                if (annotation.value().equals(userInput.command())) {
                    executeCommand(cls, sessionState, userInput);
                    found = true;
                    break;
                }
            }

            // Print an error message if the command was not found
            if (!found) {
                System.out.println("Command not recognized: " + userInput.command());
            }
        }
    }

    private static void executeCommand(Class<?> commandClass, SessionState sessionState, UserInput userInput) {
        var instance = (CommandExecutor) ClassUtils.newInstance(commandClass);
        instance.execute(sessionState, userInput);
    }
}
