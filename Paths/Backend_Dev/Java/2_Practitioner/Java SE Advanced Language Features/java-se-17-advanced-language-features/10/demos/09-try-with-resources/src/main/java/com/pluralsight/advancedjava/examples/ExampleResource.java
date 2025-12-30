/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples;

// An example resource that prints a message when it is initialized and closed.
public class ExampleResource implements AutoCloseable {

    private final String name;

    public ExampleResource(String name) {
        this.name = name;
        System.out.println("Initializing resource: " + name);
    }

    @Override
    public void close() {
        System.out.println("Closing resource: " + name);
    }
}
