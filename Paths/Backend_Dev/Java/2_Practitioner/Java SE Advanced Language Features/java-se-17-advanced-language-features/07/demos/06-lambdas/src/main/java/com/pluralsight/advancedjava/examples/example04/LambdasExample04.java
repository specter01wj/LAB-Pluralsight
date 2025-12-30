/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example04;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

/**
 * Example 4: Working with exceptions in lambda expressions.
 */
public class LambdasExample04 {

    public static void main(String[] args) {
        var names = List.of("Joe Smith", "Susan Miller", "Will Johnson");

        try (FileWriter out = new FileWriter("names.txt", StandardCharsets.UTF_8)) {
            for (String name : names) {
                out.write(name + "\n");
            }

            // The "forEach" method takes a Consumer, which we implement with a lambda expression.
            // Note that the "accept" method of interface Consumer does not have a "throws" clause.
            // Because of this, the lambda expression is not allowed to throw any checked exceptions,
            // and we are forced to catch the IOException inside the lambda expression.
            // We could wrap it in an unchecked RuntimeException, which we would then have to catch
            // in the catch-block inside the main() method. This leads to verbose and confusing code.
            names.forEach(name -> {
                try {
                    out.write(name + "\n");
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
        } catch (IOException | RuntimeException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }
    }
}
