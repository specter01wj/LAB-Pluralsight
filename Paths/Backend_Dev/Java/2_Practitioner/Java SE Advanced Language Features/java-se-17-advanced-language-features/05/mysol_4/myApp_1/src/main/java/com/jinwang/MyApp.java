package com.jinwang;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Anonymous Class vs Lambda Study <<<");

        var names = new ArrayList<>(List.of("Joe", "Susan", "John", "Louise"));
        System.out.println("\nOriginal list:");
        System.out.println(names);

        // Step 1: Sort using an anonymous class
        names.sort(new Comparator<String>() {
            @Override
            public int compare(String first, String second) {
                return Integer.compare(first.length(), second.length());
            }
        });

        System.out.println("\nSorted using anonymous class (by length):");
        System.out.println(names);

        // Step 2: Shuffle to reset order (simulated)
        names = new ArrayList<>(List.of("Joe", "Susan", "John", "Louise"));

        // Step 3: Sort using a lambda via Comparator.comparingInt
        names.sort(Comparator.comparingInt(String::length));

        System.out.println("\nSorted using lambda Comparator.comparingInt(String::length):");
        System.out.println(names);

        // Step 4: Compare outputs
        System.out.println("\n✅ Observation:");
        System.out.println("Both anonymous class and lambda produce same result.");
        System.out.println("But lambda is shorter and more readable!");

        System.out.println("\n>>> Study complete.");
    }

}
