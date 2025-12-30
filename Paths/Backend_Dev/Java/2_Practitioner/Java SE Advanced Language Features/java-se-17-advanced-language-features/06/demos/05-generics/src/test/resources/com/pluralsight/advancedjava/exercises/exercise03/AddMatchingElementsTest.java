/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise03;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static com.pluralsight.advancedjava.exercises.exercise03.Exercise03.addMatchingElements;
import static org.assertj.core.api.Assertions.assertThat;

public class AddMatchingElementsTest {

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

    public void run() {
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

        // It's possible to add senior dogs to an ArrayList<Canine>
        var seniorCanines = new ArrayList<Canine>();
        addMatchingElements(dogs, seniorCanines, Canine::isSenior);

        // It's possible to add senior cats to an ArrayList<Feline>
        var seniorFelines = new ArrayList<Feline>();
        addMatchingElements(cats, seniorFelines, Feline::isSenior);

        // It's possible to add both senior dogs and cats to an ArrayList<Animal>
        var seniorAnimals = new ArrayList<Animal>();
        addMatchingElements(dogs, seniorAnimals, Canine::isSenior);
        addMatchingElements(cats, seniorAnimals, Feline::isSenior);

        assertThat(seniorDogs).containsExactly(daisy, bella);
        assertThat(seniorCats).containsExactly(luna);
        assertThat(seniorCanines).containsExactly(daisy, bella);
        assertThat(seniorFelines).containsExactly(luna);
        assertThat(seniorAnimals).containsExactly(daisy, bella, luna);
    }
}
