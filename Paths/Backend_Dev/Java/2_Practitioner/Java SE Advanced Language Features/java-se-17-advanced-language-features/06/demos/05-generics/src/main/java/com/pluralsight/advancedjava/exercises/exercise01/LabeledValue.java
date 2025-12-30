/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

/**
 * Exercise 1: This class contains a label, which is a String, and a value of an arbitrary type.
 * <p>
 * TODO: Currently this class is not a generic type, and the value is of type Object.
 *       Make this a generic type. Replace the use of the type Object for the value with the type parameter.
 *       Also change the constructor and the getValue() method to use the type parameter instead of Object.
 *       Run the included unit test {@link Exercise01Test} to check if you have done this correctly.
 */
public class LabeledValue {

    private final String label;
    private final Object value;

    public LabeledValue(String label, Object value) {
        this.label = label;
        this.value = value;
    }

    public String getLabel() {
        return label;
    }

    public Object getValue() {
        return value;
    }
}
