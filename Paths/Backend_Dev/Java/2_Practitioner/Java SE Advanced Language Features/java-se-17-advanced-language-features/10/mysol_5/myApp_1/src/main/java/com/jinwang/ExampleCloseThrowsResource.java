package com.jinwang;

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
