/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example13;

import java.util.HashMap;
import java.util.Map;

/**
 * Example 13: Generics and varargs (variable arguments).
 */
public class AdvancedGenericsExample13 {

    // Example of a method with a variable number of arguments.
    // Inside the method, the parameter variable looks like an array (String[] in this case).
    static void printLines(String... lines) {
        for (String line : lines) {
            System.out.println(line);
        }
    }

    // A method with a varargs parameter of a non-reifiable type. This is potentially unsafe, because arrays of non-reifiable types are unsafe.
    static <T, U> void putIntoMap(Map<? super T, ? super U> map, Pair<? extends T, ? extends U>... pairs) {
        for (var pair : pairs) {
            map.put(pair.first(), pair.second());
        }

        // The method can do bad things, like the following.
        Object[] array = pairs;
        array[0] = new Pair<Long, Long>(2L, 3L);
    }

    public static void main(String[] args) {
        // When you call a varargs method, you can supply any number of arguments (even zero).
        printLines("Hello World", "How are you?");

        // Varargs are really just syntactic sugar for arrays. The compiler translates the line above to the following.
        // An array is automatically created and passed to the method.
        printLines(new String[]{"Hello World", "How are you?"});

        // We can call the putIntoMap() method with no problems. However, something peculiar is happening here.
        // Note that the compiler automatically creates an array for the variable arguments.
        // In this example, the varargs parameter is of a non-reifiable type.
        // Remember that it's not allowed to create an array of a non-reifiable type - but in this case, the compiler does it anyway!
        var map = new HashMap<Integer, String>();
        putIntoMap(map, new Pair<>(1, "one"), new Pair<>(2, "two"));

        // The line above is equivalent to the following. However, we can't write this line literally; it causes a "generic array creation" compile error.
        // putIntoMap(map, new Pair<Integer, String>[]{new Pair<>(1, "one"), new Pair<>(2, "two")});

        System.out.println(map);
    }
}

record Pair<T, U>(T first, U second) {}
