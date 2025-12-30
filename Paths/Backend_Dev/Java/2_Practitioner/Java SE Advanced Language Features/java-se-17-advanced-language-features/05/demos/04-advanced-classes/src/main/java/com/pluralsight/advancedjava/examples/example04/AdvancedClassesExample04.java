/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example04;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * Example 4: Anonymous classes.
 */
public class AdvancedClassesExample04 {

    public static void main(String[] args) {
        var names = new ArrayList<>(List.of("Joe", "Susan", "John", "Louise"));

        // Example of an anonymous local class: implement interface Comparator on the spot.
        // In practice, it is better to use a lambda expression or method reference for this purpose.
        names.sort(new Comparator<String>() {
            @Override
            public int compare(String first, String second) {
                // Compare strings by length
                return Integer.compare(first.length(), second.length());
            }
        });

        // The same thing written in a much more concise way using a method reference and the "comparingInt" factory method to create a Comparator.
        names.sort(Comparator.comparingInt(String::length));

        System.out.println(names);
    }
}
