/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example07;

import java.util.ArrayList;
import java.util.List;

/**
 * Example 7: Wildcards and wildcard parameterized types.
 */
public class AdvancedGenericsExample07 {

    public static void main(String[] args) {
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("Daisy"));
        dogs.add(new Dog("Lucky"));

        // The type "List<? extends Animal>" is a wildcard parameterized type. It matches all types that are a List of some type that extends Animal
        // (including the type List<Animal> itself). The type Dog matches the wildcard "? extends Animal", so the assignment below is allowed.
        List<? extends Animal> animals = dogs;

        // You cannot add a Cat to this list, because the concrete type that the wildcard "? extends Animal" stands for, is unknown.
        // The compiler does not have enough information to know that the concrete type is Cat (which in fact it isn't).
        // animals.add(new Cat("Luna")); // Error: incompatible types: Cat cannot be converted to capture#1 of ? extends Animal

        // Note that for exactly the same reason, you cannot add a Dog either. We know that the list actually is a List<Dog>,
        // but the wildcard parameterized type hides this fact.
        // animals.add(new Dog("Max"));
    }
}

interface Animal {}
record Dog(String name) implements Animal {}
record Cat(String name) implements Animal {}
