package com.jinwang;

import java.util.ArrayList;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Heap Pollution <<<\n");

        System.out.println("Step 1: Create raw List and add Dogs");
        List dogs = new ArrayList<Dog>(); // raw type
        dogs.add(new Dog("Daisy"));
        dogs.add(new Dog("Lucky"));
        System.out.println("• dogs list: " + dogs);

        System.out.println("\nStep 2: Assign raw List to List<Cat> (heap pollution)");
        List<Cat> cats = dogs; // ❌ unchecked warning
        System.out.println("• cats list: " + cats);

        System.out.println("\nStep 3: Try to retrieve a Cat");
        try {
            Cat cat = cats.get(0); // ❌ Runtime error (ClassCastException)
            System.out.println("Retrieved cat: " + cat.name());
        } catch (ClassCastException e) {
            System.out.println("⛔ ClassCastException: " + e.getMessage());
        }

        System.out.println("\n✅ Study complete.\n");
    }

}
