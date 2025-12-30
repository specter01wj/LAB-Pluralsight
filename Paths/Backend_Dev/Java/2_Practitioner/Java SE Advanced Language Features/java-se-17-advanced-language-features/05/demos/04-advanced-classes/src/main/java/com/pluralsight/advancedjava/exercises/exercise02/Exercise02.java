/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import java.util.UUID;

/**
 * Exercise 2: Accessing shadowed members of the enclosing class.
 * <p>
 * TODO: See the instructions below in the run() method.
 *       Run the included unit test {@link Exercise02Test} to check if you have done this correctly.
 */
public class Exercise02 {

    static final UUID TEST_UUID = UUID.randomUUID();

    static class Nested {
        static final UUID TEST_UUID = UUID.randomUUID();

        void run() {
            // TODO: First, print the value of the TEST_UUID variable in class Nested (use System.out.println()).
            //       Second, print the value of the TEST_UUID variable in class Exercise02 (use System.out.println()).
            //       Question: How can you access the member variable TEST_UUID in class Exercise02, while class Nested also has a variable named TEST_UUID?
        }
    }
}
