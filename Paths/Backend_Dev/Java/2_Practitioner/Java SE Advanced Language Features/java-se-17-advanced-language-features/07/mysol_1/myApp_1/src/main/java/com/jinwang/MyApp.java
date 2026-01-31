package com.jinwang;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 7 – Example 1: Lambda Expressions <<<");

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

        System.out.println("\n✅ Example 1 complete.");
    }

}
