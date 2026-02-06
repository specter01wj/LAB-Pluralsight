package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 10 – Example 3: Resource Initialization and Closure Order <<<");

        try (var r1 = new ExampleResource("1"); var r2 = new ExampleResource("2")) {
            System.out.println("Inside the try-block");
        }

        System.out.println("✅ Example 3 complete.\n");
    }
}
