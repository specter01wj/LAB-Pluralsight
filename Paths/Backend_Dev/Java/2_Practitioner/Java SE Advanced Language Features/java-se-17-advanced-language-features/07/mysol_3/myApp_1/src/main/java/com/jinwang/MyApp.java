package com.jinwang;

import java.util.ArrayList;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 7 – Example 3: Avoiding Side Effects in Lambdas <<<");

        var names = List.of("Joe Smith", "Susan Miller", "Will Johnson");

        var result1 = new ArrayList<String>();
        for (String name : names) {
            result1.add(name.toUpperCase());
        }
        System.out.println("For-loop result: " + result1);

        var result2 = new ArrayList<String>();
        names.forEach(name -> result2.add(name.toUpperCase()));
        System.out.println("Lambda with side effect: " + result2);

        var result3 = names.stream().map(name -> name.toUpperCase()).toList();
        System.out.println("Functional style (no side effects): " + result3);

        System.out.println("\n✅ Example 3 complete.");
    }

}
