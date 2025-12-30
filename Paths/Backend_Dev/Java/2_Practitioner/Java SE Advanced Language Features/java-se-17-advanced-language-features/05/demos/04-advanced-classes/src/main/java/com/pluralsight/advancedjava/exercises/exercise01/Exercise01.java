/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

/**
 * Exercise 1: Static nested classes.
 * <p>
 * TODO: Add a static nested class named "Nested" inside this class.
 *       Add a method named "run" to class "Nested", which is void and takes no parameters.
 *       In the "run" method, call the static method in the enclosing class and print what it returns (using System.out.println(...)).
 *       Run the included unit test {@link Exercise01Test} to check if you have done this correctly.
 */
public class Exercise01 {

    private static String getMessageStatic() {
        return "Hello from a static method in the enclosing class";
    }

    private String getMessageInstance() {
        return "Hello from an instance method in the enclosing class";
    }
}
