/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

/**
 * A formatter which can format values for logging purposes.
 * <p>
 * Note: You do not need to modify this interface for the exercise.
 */
public interface LoggableFormatter {

    /**
     * Formats the given value for logging purposes.
     *
     * @param value The value to format.
     * @return The formatted value.
     */
    String format(Object value);
}
