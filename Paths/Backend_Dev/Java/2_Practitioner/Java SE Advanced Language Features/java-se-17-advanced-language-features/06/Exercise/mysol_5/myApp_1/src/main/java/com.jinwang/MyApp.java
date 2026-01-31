package com.jinwang;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyApp {

    interface Animal {}
    record Dog(String name) implements Animal {}
    record Cat(String name) implements Animal {}

    public static void main(String[] args) {
        System.out.println(">>> Chapter 6 – Exercise 5: Type Erasure and Heap Pollution <<<");

        var daisy = new Dog("Daisy");
        var lucky = new Dog("Lucky");

        List<?> list = new ArrayList<>(Arrays.asList(daisy, lucky));

        List<Dog> dogs = (List<Dog>) list;
        System.out.println("Dogs list:");
        dogs.forEach(d -> System.out.println("• Dog: " + d.name()));

        List<Cat> cats = (List<Cat>) list;
        System.out.println("Cats list:");
        cats.forEach(c -> System.out.println("• Cat: " + c.name())); // Unsafe cast; will not fail at runtime unless mutation occurs

        System.out.println("\n✅ Exercise 5 complete.");
    }
}
