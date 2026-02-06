package com.jinwang;

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
