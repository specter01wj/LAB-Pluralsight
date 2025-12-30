/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise03;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.function.Predicate;

/**
 * Exercise 3: Bounded wildcards.
 * <p>
 * TODO: The method 'addMatchingElements' adds elements from a source Iterable to a destination Collection, if those elements are accepted by a predicate.
 *       Look at the code below, where we use this method.
 *       Right now the use of the method has unnecessary restrictions: it requires that the element type of the source and destination, and the value that's
 *       passed to the predicate, are all of the same type T.
 *       It should be possible however to add dogs to a list of canines, cats to a list of felines and both cats and dogs to a list of animals.
 *       Modify the type signature of this method to make the commented out lines in the main() method compile.
 *       Hints:
 *       - Modify the types of the parameters by adding the appropriate wildcards ("? extends ..." or "? super ...").
 *       - Add bounded wildcards to all three of the parameters (even though it might work already if you only add them to one or two of the parameters).
 *       - Remember what you've learned about when upper bounded ("extends") and lower bounded ("super") bounds are appropriate.
 *       Run the included unit test {@link Exercise03Test} to check if you have done this correctly.
 */
public class Exercise03 {

    public static <T> void addMatchingElements(Iterable<T> src, Collection<T> dest, Predicate<T> predicate) {
        for (T element : src) {
            if (predicate.test(element)) {
                dest.add(element);
            }
        }
    }

    interface Animal {
        LocalDate birthDate();
    }

    interface Canine extends Animal {
        default boolean isSenior() {
            return birthDate().isBefore(LocalDate.now().minusYears(10));
        }
    }

    interface Feline extends Animal {
        default boolean isSenior() {
            return birthDate().isBefore(LocalDate.now().minusYears(12));
        }
    }

    record Dog(String name, LocalDate birthDate) implements Canine {}
    record Cat(String name, LocalDate birthDate) implements Feline {}

    public static void main(String[] args) {
        LocalDate today = LocalDate.now();

        var daisy = new Dog("Daisy", today.minusYears(10).minusMonths(2));
        var lucky = new Dog("Lucky", today.minusYears(3).minusMonths(5));
        var bella = new Dog("Bella", today.minusYears(11).minusDays(23));
        var dogs = List.of(daisy, lucky, bella);

        var luna = new Cat("Luna", today.minusYears(13).minusMonths(3));
        var tom = new Cat("Tom", today.minusYears(4).minusDays(18));
        var cats = List.of(luna, tom);

        // It's possible to add senior dogs to an ArrayList<Dog>
        var seniorDogs = new ArrayList<Dog>();
        addMatchingElements(dogs, seniorDogs, Canine::isSenior);

        // It's possible to add senior cats to an ArrayList<Cat>
        var seniorCats = new ArrayList<Cat>();
        addMatchingElements(cats, seniorCats, Feline::isSenior);

        // TODO: It should be possible to add senior dogs to an ArrayList<Canine>
        //  Modify the signature of the method 'addMatchingElements' so that this compiles.
        var seniorCanines = new ArrayList<Canine>();
//        addMatchingElements(dogs, seniorCanines, Canine::isSenior);

        // TODO: It should be possible to add senior cats to an ArrayList<Feline>
        //  Modify the signature of the method 'addMatchingElements' so that this compiles.
        var seniorFelines = new ArrayList<Feline>();
//        addMatchingElements(cats, seniorFelines, Feline::isSenior);

        // TODO: It should be possible to add both senior dogs and cats to an ArrayList<Animal>
        //  Modify the signature of the method 'addMatchingElements' so that this compiles.
        var seniorAnimals = new ArrayList<Animal>();
//        addMatchingElements(dogs, seniorAnimals, Canine::isSenior);
//        addMatchingElements(cats, seniorAnimals, Feline::isSenior);
    }
}
