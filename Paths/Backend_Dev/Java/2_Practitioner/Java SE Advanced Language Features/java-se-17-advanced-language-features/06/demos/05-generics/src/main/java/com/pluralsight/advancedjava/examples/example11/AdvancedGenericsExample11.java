/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example11;

import java.util.ArrayList;
import java.util.List;

/**
 * Example 11: Heap pollution by unchecked casts.
 */
public class AdvancedGenericsExample11 {

    public static void main(String[] args) {
        // A List of Dogs.
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("Daisy"));
        dogs.add(new Dog("Lucky"));

        // Assigning this to a variable of the wildcard parameterized type List<? extends Animal> is OK.
        // We now have a List that contains objects of some unknown type that extends Animal.
        List<? extends Animal> animals = dogs;

        // You can cast this to the concrete parameterized type List<Dog>, but because that's a non-reifiable type,
        // the JVM will not be able to check that "animals" really refers to a List<Dog>.
        // Therefore, you get an "unchecked" warning when you compile this.
        // In this case, no heap pollution occurs because "animals" really is a List<Dog>.
        List<Dog> dogsAgain = (List<Dog>) animals;

        // When you cast it to List<Cat>, then heap pollution occurs.
        List<Cat> cats = (List<Cat>) animals;

        Cat cat = cats.get(0); // ClassCastException
    }
}

interface Animal {}
record Dog(String name) implements Animal {}
record Cat(String name) implements Animal {}
