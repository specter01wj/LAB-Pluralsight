/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

import java.util.List;

/**
 * Example 2: Capturing variables in lambda expressions.
 */
public class LambdasExample02 {

    public static void main(String[] args) {
        var names = List.of("Joe Smith", "Susan Miller", "Will Johnson");

        // A regular for-loop.
        var count = 0;
        for (String name : names) {
            System.out.println(++count + ": " + name);
        }

        // The lambda expression can access local variables of its surrounding method, but those variables must be effectively final.
        // Modifying the "count" variable (either inside or outside the lambda expression) does not work.
        // Error: local variables referenced from a lambda expression must be final or effectively final
        // names.forEach(name -> System.out.println(++count + ": " + name));
    }
}
