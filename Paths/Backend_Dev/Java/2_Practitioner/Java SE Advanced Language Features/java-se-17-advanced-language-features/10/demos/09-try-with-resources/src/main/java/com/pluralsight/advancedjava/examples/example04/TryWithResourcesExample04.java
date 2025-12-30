/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example04;

import com.pluralsight.advancedjava.examples.ExampleResource;

/**
 * Example 4: Resources are closed before the catch-block is executed.
 */
public class TryWithResourcesExample04 {

    public static void main(String[] args) {
        // When an exception occurs (whether it's in the try-block or when initializing resources),
        // the resources that have been successfully initialized are closed before the catch-block is executed.
        try (var r1 = new ExampleResource("1"); var r2 = new ExampleResource("2")) {
            System.out.println("Inside the try-block");
            throw new Exception("Exception thrown in try-block");
        } catch (Exception e) {
            System.out.println("Inside the catch-block");
            e.printStackTrace(System.out);
        }
    }
}
