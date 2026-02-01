package com.jinwang;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 7 – Example 2: Capturing Variables in Lambdas <<<");

        var names = List.of("Joe Smith", "Susan Miller", "Will Johnson");

        System.out.println("\nRegular for-loop:");
        var count = 0;
        for (String name : names) {
            System.out.println(++count + ": " + name);
        }

        System.out.println("\nLambda expression (cannot modify local variable):");
        System.out.println("// names.forEach(name -> System.out.println(++count + \": \" + name));");
        System.out.println("// ❌ Compile-time error: variable must be final or effectively final");

        System.out.println("\nLambda with workaround using AtomicInteger:");
        var lambdaCount = new AtomicInteger(0);
        names.forEach(name ->
                System.out.println(lambdaCount.incrementAndGet() + ": " + name)
        );

        System.out.println("\n✅ Example 2 complete.");
    }

}
