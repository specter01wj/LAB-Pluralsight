package com.jinwang;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Arrays vs Generics <<<\n");

        System.out.println("Step 1: Generic arrays are NOT allowed (compile-time)");
        System.out.println("// Pair<Integer, String>[] pairs = new Pair[10]; // ❌ Compile error\n");

        System.out.println("Step 2: Create Dog[] array");
        Dog[] dogs = new Dog[2];
        dogs[0] = new Dog("Daisy");
        dogs[1] = new Dog("Lucky");

        System.out.println("Dogs array:");
        for (Dog d : dogs) {
            System.out.println("• Dog: " + d.name());
        }

        System.out.println("\nStep 3: Arrays are covariant");
        System.out.println("Dog[] → Animal[] is allowed");
        Animal[] animals = dogs;

        System.out.println("\nStep 4: Insert Cat into Animal[]");
        try {
            animals[0] = new Cat("Luna"); // Runtime failure
        } catch (ArrayStoreException e) {
            System.out.println("⛔ ArrayStoreException caught:");
            System.out.println(e);
        }

        System.out.println("\nStep 5: Final observation");
        System.out.println("""
                • Arrays are covariant (Dog[] IS-A Animal[])
                • Generics are invariant (List<Dog> is NOT List<Animal>)
                • Arrays enforce type safety at runtime
                • Generics enforce type safety at compile time
                """);

        System.out.println("✅ Study complete.");
    }

}

record Pair<T, U>(T first, U second) {}

interface Animal {}
record Dog(String name) implements Animal {}
record Cat(String name) implements Animal {}
