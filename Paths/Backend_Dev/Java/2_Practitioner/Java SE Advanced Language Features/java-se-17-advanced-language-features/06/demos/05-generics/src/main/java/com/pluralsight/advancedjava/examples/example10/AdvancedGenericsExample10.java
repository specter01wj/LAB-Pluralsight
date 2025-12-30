/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example10;

import java.util.ArrayList;
import java.util.List;

/**
 * Example 10: Heap pollution by mixing raw types and parameterized types.
 */
public class AdvancedGenericsExample10 {

    public static void main(String[] args) {
        // A List of Dogs, but the variable "dogs" is of the raw type List.
        List dogs = new ArrayList<Dog>();
        dogs.add(new Dog("Daisy"));
        dogs.add(new Dog("Lucky"));

        // The variable "dogs" is of the raw type List. Because of the relaxed type checking rules for raw types,
        // the compiler lets us assign it to the variable "cats" which is of the parameterized type List<Cat>.
        // Now the variable "cats" refers to an object that is not really a List<Cat> - this is an example of heap pollution.
        // Note that you get an "unchecked" warning when you compile this.
        List<Cat> cats = dogs;

        // Printing the list works without problems, and it will show that the list in fact contains Dog objects.
        System.out.println(cats);

        // Trying to get a Cat out of the list will cause a ClassCastException, even when we didn't explicitly do a type cast.
        Cat cat = cats.get(0);
    }
}

interface Animal {}
record Dog(String name) implements Animal {}
record Cat(String name) implements Animal {}
