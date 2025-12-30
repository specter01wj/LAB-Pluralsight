/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise03;

import java.util.Set;

/**
 * Exercise 3: This is a record that represents a Product. It contains an id, a name and a set of keywords.
 * <p>
 * TODO: This record is not fully immutable. Can you see why not? Edit the record so that the content of the components cannot be modified.
 *       Hint: Add a compact constructor to the record that does what is necessary. Keep in mind that a java.util.Set might be mutable.
 *       Run the included unit test {@link Exercise03Test} to check if you have done this correctly.
 */
public record Product(long id, String name, Set<String> keywords) {
}
