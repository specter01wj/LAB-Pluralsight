/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

/**
 * Example 2: Inner classes.
 */
public class Enclosing {

    // Instance member variable in the enclosing class.
    private String name = "Joe Smith";

    public void createInner() {
        // Step 3: Create an instance of the inner class inside an instance method of the enclosing class.
        // Note that this is the same as "this.new Inner()".
        var inner = new Inner();
    }

    // Step 1: Create an inner class inside class Enclosing.
    class Inner {
        private String name = "Susan Jones";

        void run() {
            // Step 4: To access shadowed members of the enclosing class, use the name of the enclosing class followed by "this" as a prefix.
            // In fact, "Enclosing.this" is how you access the hidden reference that the inner class has to the instance of its enclosing class.
            System.out.println(name);
            System.out.println(Enclosing.this.name);
        }
    }
}
