/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples;

// An example resource that throws an exception when it is closed.
public class ExampleCloseThrowsResource implements AutoCloseable {

    private final String name;

    public ExampleCloseThrowsResource(String name) {
        this.name = name;
        System.out.println("Initializing resource: " + name);
    }

    @Override
    public void close() throws Exception {
        System.out.println("Closing resource: " + name);
        throw new Exception("Exception thrown while closing resource: " + name);
    }
}
