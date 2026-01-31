package com.jinwang;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 7 – Example 1: Lambda Expressions <<<");

        var names = new ArrayList<>(List.of("Joe", "Susan", "John", "Louise"));

        names.sort((first, second) -> Integer.compare(first.length(), second.length()));

        names.forEach(name -> System.out.println("• " + name));

        System.out.println("\n✅ Example 1 complete.");
    }

}
