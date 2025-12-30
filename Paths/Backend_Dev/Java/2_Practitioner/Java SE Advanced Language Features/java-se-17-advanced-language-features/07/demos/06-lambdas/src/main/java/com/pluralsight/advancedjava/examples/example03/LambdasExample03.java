/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example03;

import java.util.ArrayList;
import java.util.List;

/**
 * Example 3: Avoiding side effects in lambda expressions.
 */
public class LambdasExample03 {

    public static void main(String[] args) {
        var names = List.of("Joe Smith", "Susan Miller", "Will Johnson");

        var result1 = new ArrayList<String>();
        for (String name : names) {
            result1.add(name.toUpperCase());
        }
        System.out.println(result1);

        // Antipattern: A lambda expression with a side effect - modifying the state of an object
        // which is defined outside the lambda expression.
        var result2 = new ArrayList<String>();
        names.forEach(name -> result2.add(name.toUpperCase()));
        System.out.println(result2);

        // If you want to program in a functional style in Java, then keep the principles of functional programming in mind.
        // One important principle is that lambda expressions should not have side effects, which means that the output
        // of the lambda expression should only depend on its input, and it should not have any other effects, such as
        // modifying data that comes from elsewhere in the program, or performing I/O operations.
        var result3 = names.stream().map(name -> name.toUpperCase()).toList();
        System.out.println(result3);
    }
}
