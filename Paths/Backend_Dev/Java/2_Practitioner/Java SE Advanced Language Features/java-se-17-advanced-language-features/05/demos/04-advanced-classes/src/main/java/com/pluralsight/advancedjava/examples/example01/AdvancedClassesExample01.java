/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

// Step 3a: Import the nested class, referring to the enclosing class as if it's a package.
// import com.pluralsight.advancedjava.examples.example01.Enclosing.Nested;

/**
 * Example 1: Static nested classes.
 */
public class AdvancedClassesExample01 {

    public static void main(String[] args) {
        // Step 2: Create an instance of the nested class by referring to its name, prefixed with the name of the enclosing class.
        var nested = new Enclosing.Nested();

        // Step 3b: When you've imported the nested class, create an instance of it just by referring to its name;
        // just like any other class that you've imported from a package.
        // var nested = new Nested();
    }
}
