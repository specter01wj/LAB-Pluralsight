package com.pluralsight.advancedjava.exercises.exercise05;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Exercise 5: Type erasure, unchecked warnings and heap pollution.
 * <p>
 * Note: There is no unit test for this exercise. Look at the code below, experiment with it yourself and answer the questions
 * until you feel you understand it sufficiently.
 */
public class Exercise05 {

    interface Animal {}
    record Dog(String name) implements Animal {}
    record Cat(String name) implements Animal {}

    public static void main(String[] args) {
        var daisy = new Dog("Daisy");
        var lucky = new Dog("Lucky");

        // A list of dogs.
        List<?> list = new ArrayList<>(Arrays.asList(daisy, lucky));

        // TODO: Question: You know that the list we created above contains Dog objects. You can cast it to the type List<Dog>.
        //  But when you do that, you get an "unchecked cast" warning from the compiler. Can you explain exactly why?
        List<Dog> dogs = (List<Dog>) list;
        System.out.println(dogs);

        // TODO: Question: Even though you know that the list we created above contains Dog objects, the compiler lets us cast it to the type List<Cat>.
        //  Why do you not get an error when you compile this?
        //  What happens when you run this code? Do you get a runtime error; why or why not?
        List<Cat> cats = (List<Cat>) list;
        System.out.println(cats);
    }
}
