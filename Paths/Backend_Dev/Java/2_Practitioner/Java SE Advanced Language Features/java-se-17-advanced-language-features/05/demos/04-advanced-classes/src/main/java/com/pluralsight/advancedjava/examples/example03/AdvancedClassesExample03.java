/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example03;

/**
 * Example 3: Local types.
 */
public class AdvancedClassesExample03 {

    // Instance member variable in the enclosing class.
    private String name = "Joe Smith";

    public void example(int x, int y) {
        // Local variable in the enclosing method.
        int number = 23;

        // Step 1: Define a local class defined inside a method.
        class Local {
            void method() {
                // Step 3: The local class can access parameters and local variables of the enclosing method, as long as they are effectively final.
                System.out.println(x + y);
                System.out.println(number);

                // Modifying the values of parameters and local variables inside the local class is not allowed.
                // number = 45;

                // Step 4: The local class can also access members of the class that the method is defined in. These do not need to be effectively final.
                // Note: Instance variables cannot be accessed from a static context.
                System.out.println(name);
            }
        }

        // Step 2: Create an instance of the local class just like of any other class.
        var obj = new Local();
        obj.method();

        // If you do anything that causes the parameter variables or local variables to not be effectively final anymore, you get an error in the local class.
        // x += 2;
        // number++;

        // For member variables of the enclosing class, the effectively final rule does not exist.
        name = "Susan Jones";
    }

    public static void main(String[] args) {
        new AdvancedClassesExample03().example(2, 3);
    }
}
