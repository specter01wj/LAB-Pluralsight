/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise05;

/**
 * Exercise 5: This is a record that represents a street address.
 * <p>
 * TODO: Implement a "wither" method for each of the components of this record.
 *       A "wither" method makes a modified copy of a record, with a new value for one (or more) of the components.
 *       The name of the methods should be "withXxx" where "Xxx" is the capitalized name of the component.
 *       Run the included unit test {@link Exercise05Test} to check if you have done this correctly.
 */
public record Address(String street, String houseNumber, String city, String country) {
}
