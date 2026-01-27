package com.jinwang;

import java.util.ArrayList;
import java.util.List;

public class MyApp {

    public static main(String[] args) {
        System.out.println(">>> Advanced Generics: Invariance of Generics <<<\n");

        System.out.println("Step 1: Create List<Dog>");
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("Daisy"));
        dogs.add(new Dog("Lucky"));
        dogs.forEach(dog -> System.out.println("• Dog: " + dog.name()));

        System.out.println("\nStep 2: Try assigning List<Dog> to List<Animal>");
        System.out.println("⛔ Not allowed! Generics are invariant.");
        System.out.println("// List<Animal> animals = dogs; // ❌ Compile Error");

        System.out.println("\nStep 3: Why is it unsafe?");
        System.out.println("If allowed, you could add a Cat to List<Dog>, which breaks type safety.");
        System.out.println("// animals.add(new Cat(\"Luna\")); // ❌ Logic Error\n");

        System.out.println("✅ Study complete.\n");
    }

}
