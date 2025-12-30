package com.pluralsight.advancedjava.exercises.exercise04;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Exercise 4: Generics and inheritance and the meaning of different parameterized types.
 * <p>
 * Note: There is no unit test for this exercise. Look at the code below, experiment with it yourself and answer the questions
 * until you feel you understand it sufficiently.
 */
public class Exercise04 {

    interface Animal {}
    record Dog(String name) implements Animal {}
    record Cat(String name) implements Animal {}

    public static void main(String[] args) {
        var daisy = new Dog("Daisy");
        var lucky = new Dog("Lucky");
        var luna = new Cat("Luna");

        // A list of dogs.
        List<Dog> dogs = new ArrayList<>(Arrays.asList(daisy, lucky));

        // A list of cats.
        List<Cat> cats = new ArrayList<>(Collections.singletonList(luna));

        // TODO: Question: Dogs are animals. Why can you not initialize a List<Animal> with a List<Dog>?
//        List<Animal> animals = dogs;

        // TODO: Question: What exactly does the type 'List<? extends Animal>' mean? Why can you initialize this with a List<Dog>?
        List<? extends Animal> animals = dogs;

        // TODO: Question: Why can you not add a Dog to the List<? extends Animal> that we've just created?
        //  What does the error message mean that you get when you try this?
//        animals.add(new Dog("Bella"));

        // TODO: Question: What is the difference between list1 (a List<Object>) and list2 (a List<?>) as defined below?
        List<Object> list1 = new ArrayList<>();
        List<?> list2 = new ArrayList<>();

        // TODO: Question: Why can you add an object to list1, but not to list2?
        list1.add(daisy);
//        list2.add(daisy);
    }
}
