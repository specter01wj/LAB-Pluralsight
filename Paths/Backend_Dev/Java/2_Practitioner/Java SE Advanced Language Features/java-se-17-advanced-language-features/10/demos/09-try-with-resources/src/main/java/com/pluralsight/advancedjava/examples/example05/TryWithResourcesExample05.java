/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example05;

import com.pluralsight.advancedjava.examples.ExampleCloseThrowsResource;
import com.pluralsight.advancedjava.examples.ExampleResource;

/**
 * Example 5: Suppressed exceptions.
 */
public class TryWithResourcesExample05 {

    public static void main(String[] args) {
        // When an exception occurs while closing a resource after a previous exception has been thrown,
        // the exception that happens while closing the resource will be suppressed.
        try (var r1 = new ExampleResource("1"); var r2 = new ExampleCloseThrowsResource("2")) {
            System.out.println("Inside the try-block");
            throw new Exception("Exception thrown in try-block");
        } catch (Exception e) {
            System.out.println("Inside the catch-block");
            e.printStackTrace(System.out); // Prints suppressed exceptions as well

            // You can get the suppressed exceptions if you need more information about them.
            Throwable[] suppressed = e.getSuppressed();
        }
    }
}
