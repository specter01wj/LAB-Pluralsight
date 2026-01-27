package com.jinwang;

import java.util.ArrayList;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Invariance of Generics <<<\n");

        System.out.println("Step 1: Create List<Dog>");
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("Daisy"));
        dogs.add(new Dog("Lucky"));
        dogs.forEach(dog -> System.out.println("• Dog: " + dog.name()));

        System.out.println("\nStep 2: Try assigning List<Dog> to List<Animal>");
        System.out.println("⛔ Not allowed! Generics are invariant.");
        System.out.println("// List<Animal> animals = dogs; // ❌ Compile-time error");

        System.out.println("\nStep 3: Why is this unsafe?");
        System.out.println("If this were allowed, we could do:");
        System.out.println("// animals.add(new Cat(\"Luna\"));");
        System.out.println("This would put a Cat into a List<Dog> — type safety is broken.");

        System.out.println("\n✅ Key takeaway:");
        System.out.println("Even though Dog extends Animal, List<Dog> does NOT extend List<Animal>.");

        System.out.println("\n✅ Study complete.");
    }

}
