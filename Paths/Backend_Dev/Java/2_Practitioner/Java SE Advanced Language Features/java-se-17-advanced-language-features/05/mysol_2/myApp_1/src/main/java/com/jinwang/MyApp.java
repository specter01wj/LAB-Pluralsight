package com.jinwang;

public class MyApp {

    public static void main(String[] args) {

        System.out.println("=== Inner Class Study ===\n");

        // Step 1: Create Enclosing instance
        var enclosing = new Enclosing();
        System.out.println("Created Enclosing instance");

        // Step 2: Create Inner instance tied to enclosing
        var inner = enclosing.new Inner();
        System.out.println("Created Inner instance bound to enclosing");

        // Step 3: Run inner logic
        System.out.println("\n--- Running inner.run() ---");
        inner.run();

        // Step 4: Demonstrate implicit reference
        System.out.println("\n--- Key Observations ---");
        System.out.println("1) Inner has its own 'name' field");
        System.out.println("2) Inner can access Enclosing.this.name");
        System.out.println("3) Inner CANNOT exist without Enclosing");

        // Step 5: Create another Enclosing to prove binding
        var enclosing2 = new Enclosing();
        var inner2 = enclosing2.new Inner();

        System.out.println("\n--- Second enclosing instance ---");
        inner2.run();

        System.out.println("\nStudy complete.");
    }

}
