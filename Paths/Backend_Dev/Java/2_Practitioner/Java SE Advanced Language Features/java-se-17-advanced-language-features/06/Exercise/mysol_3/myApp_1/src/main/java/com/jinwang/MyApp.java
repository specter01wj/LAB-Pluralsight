package com.jinwang;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.function.Predicate;

public class MyApp {

    public static <T> void addMatchingElements(
            Iterable<? extends T> src,
            Collection<? super T> dest,
            Predicate<? super T> predicate) {
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
        System.out.println(">>> Chapter 6 – Exercise 3: Bounded Wildcards <<<");

        LocalDate today = LocalDate.now();

        var daisy = new Dog("Daisy", today.minusYears(10).minusMonths(2));
        var lucky = new Dog("Lucky", today.minusYears(3).minusMonths(5));
        var bella = new Dog("Bella", today.minusYears(11).minusDays(23));
        var dogs = List.of(daisy, lucky, bella);

        var luna = new Cat("Luna", today.minusYears(13).minusMonths(3));
        var tom = new Cat("Tom", today.minusYears(4).minusDays(18));
        var cats = List.of(luna, tom);

        var seniorDogs = new ArrayList<Dog>();
        addMatchingElements(dogs, seniorDogs, Canine::isSenior);

        var seniorCats = new ArrayList<Cat>();
        addMatchingElements(cats, seniorCats, Feline::isSenior);

        var seniorCanines = new ArrayList<Canine>();
        addMatchingElements(dogs, seniorCanines, Canine::isSenior);

        var seniorFelines = new ArrayList<Feline>();
        addMatchingElements(cats, seniorFelines, Feline::isSenior);

        var seniorAnimals = new ArrayList<Animal>();
        addMatchingElements(dogs, seniorAnimals, Canine::isSenior);
        addMatchingElements(cats, seniorAnimals, Feline::isSenior);

        System.out.println("Senior Canines:");
        seniorCanines.forEach(d -> System.out.println("• " + ((Dog) d).name()));
        System.out.println("Senior Felines:");
        seniorFelines.forEach(c -> System.out.println("• " + ((Cat) c).name()));
        System.out.println("Senior Animals:");
        seniorAnimals.forEach(a -> {
            if (a instanceof Dog d) System.out.println("• Dog: " + d.name());
            else if (a instanceof Cat c) System.out.println("• Cat: " + c.name());
        });

        System.out.println("\n✅ Exercise 3 complete.");
    }

}
