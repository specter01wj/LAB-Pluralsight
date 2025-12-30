/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example06;

import java.util.ArrayList;
import java.util.List;

/**
 * Example 6: Generics are invariant.
 */
public class AdvancedGenericsExample06 {

    public static void main(String[] args) {
        // A List of Dogs.
        List<Dog> dogs = new ArrayList<>();
        dogs.add(new Dog("Daisy"));
        dogs.add(new Dog("Lucky"));

        // Generics are invariant, which means that the inheritance relationship between type arguments of different parameterized types
        // does not carry over into the parameterized types. In other words, even though Dog and Cat are subtypes of Animal, List<Dog> and List<Cat>
        // are NOT subtypes of List<Animal>.

        // List<Animal> animals = dogs; // Error: incompatible types: List<Dog> cannot be converted to List<Animal>

        // This sounds counterintuitive at first, because you would expect that a list of dogs is also a list of animals.
        // But if this were allowed, you could do things that are obviously wrong, such as adding a Cat to a List of Dogs:
        // animals.add(new Cat("Luna"));
    }
}

interface Animal {}
record Dog(String name) implements Animal {}
record Cat(String name) implements Animal {}
