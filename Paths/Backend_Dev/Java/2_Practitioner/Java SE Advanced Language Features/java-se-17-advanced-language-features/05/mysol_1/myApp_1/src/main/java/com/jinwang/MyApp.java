package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        // Instantiating the static nested class
        var nested = new Enclosing.Nested();
        nested.run();

        // Optionally test instance method from Enclosing
        System.out.println("\n--- Running from enclosing instance ---");
        var enclosing = new Enclosing();
        enclosing.createAndRunNested();
    }

}
