/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

import java.time.LocalDate;

/**
 * Example 1: Static nested classes.
 */
public class Enclosing {

    // Static member variables in the enclosing class.
    private static int number = 23;
    private static LocalDate date = LocalDate.of(2023, 1, 1);

    // Instance member variable in the enclosing class.
    private String name = "Joe Smith";

    // Static method in the enclosing class.
    private static void printNumber() {
        System.out.println(number);
    }

    // Another static method in the enclosing class.
    private static void printDate() {
        System.out.println(date);
    }

    // Instance method in the enclosing class.
    public void printName() {
        System.out.println(name);
    }

    public void createAndRunNested() {
        var nested = new Nested();

        // Step 5b: The enclosing class can access private members of the nested class, such as the private "run" method.
        nested.run();
    }

    // Step 1: Create a static nested class inside class Enclosing.
    static class Nested {
        // A member variable in the nested class that shadows the member variable "date" in the enclosing class.
        private LocalDate date = LocalDate.of(2011, 8, 9);

        private void run() {
            // Step 4a: The static nested class can only access the static members of its enclosing class;
            // we can access the static member variable "number" here and also the static method "printNumber".
            // Step 5a: The nested class can access private members of its enclosing class.
            System.out.println(number);
            printNumber();

            // Step 4b: The static nested class cannot access the instance members of its enclosing class.
            // System.out.println(name);
            // printName();

            // Step 6a: The nested class has a member variable "date" that has the same name as the member variable in the enclosing class.
            // The member variable in the nested class shadows the one in the enclosing class, which means that the name "date" now refers
            // to the member variable in the nested class.
            System.out.println(date);

            // Step 6b: To access the shadowed member variable in the enclosing class, prefix its name by the name of the enclosing class.
            System.out.println(Enclosing.date);

            // Step 6c: Other members, such as methods, can also be shadowed. To access the shadowed members in the enclosing class, prefix
            // their name with the name of the enclosing class.
            printDate();
            Enclosing.printDate();
        }

        // A method in the nested class that shadows the method "printDate" in the enclosing class.
        private void printDate() {
            System.out.println(date);
        }
    }
}
