package com.jinwang;

import java.util.ArrayList;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Advanced Generics: Heap Pollution via Unchecked Casts <<<\n");

        // Step 1: Create List<Dog>
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("Daisy"));
        dogs.add(new Dog("Lucky"));
        System.out.println("Dogs list: " + dogs);

        // Step 2: Assign to wildcard type
        List<? extends Animal> animals = dogs;
        System.out.println("\nAssigned List<Dog> to List<? extends Animal>");

        // Step 3: Safe unchecked cast (still List<Dog>)
        @SuppressWarnings("unchecked")
        List<Dog> dogsAgain = (List<Dog>) animals;
        System.out.println("dogsAgain (unchecked cast): " + dogsAgain);

        // Step 4: Unsafe unchecked cast → heap pollution
        try {
            @SuppressWarnings("unchecked")
            List<Cat> cats = (List<Cat>) animals;

            System.out.println("\nAttempting to retrieve Cat from polluted list...");
            Cat cat = cats.get(0); // 💥 ClassCastException
            System.out.println(cat);
        } catch (ClassCastException e) {
            System.out.println("⛔ ClassCastException caught:");
            System.out.println(e.getMessage());
        }

        System.out.println("\n✅ Study complete.");
    }

}


interface Animal {}

record Dog(String name) implements Animal {
    @Override
    public String toString() {
        return "Dog: " + name;
    }
}

record Cat(String name) implements Animal {
    @Override
    public String toString() {
        return "Cat: " + name;
    }
}
