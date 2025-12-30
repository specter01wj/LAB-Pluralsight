/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

/**
 * Example 2: Inner classes.
 */
public class AdvancedClassesExample02 {

    public static void main(String[] args) {
        // Step 2: Create an instance of the inner class by first creating an instance of the enclosing class,
        // and then calling "new" on it to create an instance of the inner class.
        var enclosing = new Enclosing();
        var inner = enclosing.new Inner();

        // Of course, you could have combined creating the instance of the enclosing class and the inner class in one statement.
        // var inner = new Enclosing().new Inner();
    }
}
