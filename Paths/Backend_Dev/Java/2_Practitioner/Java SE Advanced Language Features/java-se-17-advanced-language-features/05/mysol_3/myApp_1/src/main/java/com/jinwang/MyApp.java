package com.jinwang;

public class MyApp {

    // Instance member variable in the enclosing class.
    private String name = "Joe Smith";

    public void example(int x, int y) {
        System.out.println("=== Local Class Study ===");
        System.out.printf("Initial x = %d, y = %d\n", x, y);

        // Local variable in the enclosing method.
        int number = 23;

        // Step 1: Define a local class inside the method
        class Local {
            void method() {
                System.out.println("\n--- Inside Local.method() ---");
                System.out.println("Sum of parameters x + y: " + (x + y));         // 5
                System.out.println("Local variable 'number': " + number);          // 23
                System.out.println("Enclosing class field 'name': " + name);       // Joe Smith
            }
        }

        // Step 2: Instantiate and call
        var obj = new Local();
        obj.method();

        System.out.println("\n--- After local class usage ---");
        // These are allowed: changes to class fields after using local class
        name = "Susan Jones";  // Legal, because class fields do not require "effectively final"
        System.out.println("Modified enclosing field 'name': " + name);

        // These would break the local class if placed earlier
        // x += 1;      // not allowed if local class uses it
        // number++;    // not allowed if local class uses it
    }

    public static void main(String[] args) {
        System.out.println(">>> Testing Local Class <<<\n");

        var demo = new MyApp();

        // First run
        demo.example(2, 3);

        System.out.println("\n=== Second run with different input ===");
        demo.example(10, 15);

        System.out.println("\n>>> Test complete.");
    }

}
