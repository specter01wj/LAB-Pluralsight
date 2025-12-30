/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example03;

import com.pluralsight.advancedjava.examples.ExampleResource;

/**
 * Example 3: The order in which resources are initialized and closed.
 */
public class TryWithResourcesExample03 {

    public static void main(String[] args) {
        // Resources are initialized in the order they are declared and closed in the opposite order.
        try (var r1 = new ExampleResource("1"); var r2 = new ExampleResource("2")) {
            System.out.println("Inside the try-block");
        }
    }
}
