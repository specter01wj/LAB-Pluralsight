/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example03;

/**
 * Example 3: Defining generic methods.
 */
public class AdvancedGenericsExample03 {

    public static void main(String[] args) {
        // Using the static method Pair.of() to create an instance of Pair.
        // Note the placement of the type arguments: after the '.' and directly before the method name.
        var p1 = Pair.<Integer, String>of(1, "one");
        System.out.println(p1);

        // Because of type inference, it's not actually necessary to specify the type arguments.
        var p2 = Pair.of(2, "two");
        System.out.println(p2);

        var p3 = p1.withFirst(3);
        System.out.println(p3);

        // Calling the generic instance method 'map'.
        var p4 = p3.map((left, right) -> Pair.of(right, left));
        System.out.println(p4);

        // We used type inference again in the line where we called 'map' again. With explicit types it looks like this:
        // var p4 = p3.<String, Integer>map((Integer left, String right) -> Pair.<String, Integer>of(right, left));
    }
}
