/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example12;

/**
 * Example 12: Generics and arrays.
 */
public class AdvancedGenericsExample12 {

    public static void main(String[] args) {
        // Creating an array of a non-reifiable type is not allowed.
        // The compiler gives you an error that's not very informative: "generic array creation".
        // Pair<Integer, String>[] pairs = new Pair<Integer, String>[10];

        // An array of dogs.
        Dog[] dogs = new Dog[2];
        dogs[0] = new Dog("Daisy");
        dogs[1] = new Dog("Lucky");

        // Generics are invariant, but arrays are covariant.
        // This means that because Dog is an Animal, an array of Dog is also an array of Animal and this assignment works.
        Animal[] animals = dogs;

        // The compiler lets us put a Cat into an array of Dogs without errors or warnings.
        // However, this will cause an ArrayStoreException at runtime.
        animals[0] = new Cat("Luna");

        // We can even get the Cat out of the array and assign it to a variable of type Dog.
        Dog luna = dogs[0];
    }

    // Creating an array of a type parameter also results in the error "generic array creation".
//    static <T> T[] createArray(int size) {
//        return new T[size];
//    }
}

record Pair<T, U>(T first, U second) {}

interface Animal {}
record Dog(String name) implements Animal {}
record Cat(String name) implements Animal {}
