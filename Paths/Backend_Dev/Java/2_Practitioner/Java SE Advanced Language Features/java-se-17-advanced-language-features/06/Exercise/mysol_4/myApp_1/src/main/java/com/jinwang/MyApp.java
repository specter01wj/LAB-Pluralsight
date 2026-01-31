package com.jinwang;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class MyApp {

    interface Animal {}
    record Dog(String name) implements Animal {}
    record Cat(String name) implements Animal {}

    public static void main(String[] args) {
        System.out.println(">>> Chapter 6 – Exercise 4: Generics and Inheritance <<<");

        var daisy = new Dog("Daisy");
        var lucky = new Dog("Lucky");
        var luna = new Cat("Luna");

        List<Dog> dogs = new ArrayList<>(Arrays.asList(daisy, lucky));
        List<Cat> cats = new ArrayList<>(Collections.singletonList(luna));

        List<? extends Animal> animals = dogs;

        System.out.println("Animals list (from dogs):");
        animals.forEach(a -> {
            if (a instanceof Dog d) {
                System.out.println("• Dog: " + d.name());
            } else if (a instanceof Cat c) {
                System.out.println("• Cat: " + c.name());
            }
        });

        List<Object> list1 = new ArrayList<>();
        List<?> list2 = new ArrayList<>();

        list1.add(daisy);
        list1.add(luna);

        System.out.println("List<Object> contents:");
        list1.forEach(o -> {
            if (o instanceof Dog d) {
                System.out.println("• Dog: " + d.name());
            } else if (o instanceof Cat c) {
                System.out.println("• Cat: " + c.name());
            }
        });

        System.out.println("\n✅ Exercise 4 complete.");
    }
}
