package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println("--- Step 1: Create a Nested instance directly ---");
        var nested = new Enclosing.Nested();
        System.out.println("✅ Nested instance created: " + nested);

        // Can't call nested.run() directly, as it's private
        // nested.run(); // ❌ Compile error

        System.out.println("\n--- Step 2: Indirectly test nested.run() ---");
        var enclosing = new Enclosing();
        enclosing.createAndRunNested(); // ✅ This calls nested.run() internally

        System.out.println("\n--- Step 3: Repeat to confirm deterministic output ---");
        enclosing.createAndRunNested();

        System.out.println("\n--- Step 4: Show type and shadowing behavior ---");
        // Not accessing date directly (it's private), but can comment on behavior
        System.out.println("Note: Nested has its own 'date' that shadows Enclosing.date.");

        System.out.println("\n--- Step 5: Instance check ---");
        System.out.println("nested is instance of Enclosing.Nested: " + (nested instanceof Enclosing.Nested));
    }

}
