/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example05;

import java.io.IOException;
import java.util.Properties;

/**
 * Example 5: Static initializer blocks.
 */
public class AdvancedClassesExample05 {

    private static final Properties CONFIGURATION = new Properties();

    // Static initializer block.
    static {
        // Example of a use case: You need to deal with checked exceptions while initializing a static member variable of the class.
        // Note that the static initializer block cannot throw checked exceptions, but at least you can catch them here and wrap them in an unchecked exception.
        try {
            CONFIGURATION.load(AdvancedClassesExample05.class.getResourceAsStream("/example.properties"));
        } catch (IOException e) {
            throw new RuntimeException("Error while loading configuration", e);
        }
    }

    public static void main(String[] args) {
        System.out.println(CONFIGURATION.getProperty("message"));
    }
}
