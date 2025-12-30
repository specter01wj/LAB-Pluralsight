/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * Example 1: Lambda expressions.
 */
public class LambdasExample01 {

    public static void main(String[] args) {
        var names = new ArrayList<>(List.of("Joe", "Susan", "John", "Louise"));

        // Sorting the list of names by length using an anonymous class.
        // We need six lines of code, but most of it is "plumbing" code.
        names.sort(new Comparator<String>() {
            @Override
            public int compare(String first, String second) {
                return Integer.compare(first.length(), second.length());
            }
        });

        // Using a lambda expression instead of an anonymous class.
        names.sort((first, second) -> Integer.compare(first.length(), second.length()));

        System.out.println(names);
    }
}
