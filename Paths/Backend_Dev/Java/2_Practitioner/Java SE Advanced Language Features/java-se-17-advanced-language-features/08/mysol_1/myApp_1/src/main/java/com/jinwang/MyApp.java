package com.jinwang;

import ClassUtils;
import com.jinwang.commands.CommandExecutor;

import java.io.IOException;
import java.util.*;

public class MyApp {

    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Set<String> classNames = ClassUtils.findClassNames("com.pluralsight.advancedjava.examples.example01.commands");

        List<Class<?>> commandClasses = new ArrayList<>();
        for (String className : classNames) {
            Class<?> cls = Class.forName(className);
            Command annotation = cls.getAnnotation(Command.class);
            if (annotation != null) {
                System.out.printf("Found command: %s, order: %d%n", annotation.value(), annotation.order());
                commandClasses.add(cls);
            }
        }

        commandClasses.sort(Comparator.comparingInt(cls -> cls.getAnnotation(Command.class).order()));

        var sessionState = new SessionState();
        var scanner = new Scanner(System.in);

        while (!sessionState.isFinished()) {
            System.out.println();
            for (Class<?> cls : commandClasses) {
                Command annotation = cls.getAnnotation(Command.class);
                System.out.printf("%-12s - %s%n", annotation.value(), annotation.description());
            }

            var userInput = UserInput.readUserInput(scanner);

            boolean found = false;
            for (Class<?> cls : commandClasses) {
                Command annotation = cls.getAnnotation(Command.class);
                if (annotation.value().equals(userInput.command())) {
                    executeCommand(cls, sessionState, userInput);
                    found = true;
                    break;
                }
            }

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
