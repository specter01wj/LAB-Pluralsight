/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

/**
 * An implementation of {@link LoggableFormatter} to format {@link java.time.LocalDate LocalDate} objects.
 * <p>
 * Note: You do not need to modify this class for the exercise.
 */
public class LocalDateLoggableFormatter implements LoggableFormatter {

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("M/d/yyyy");

    @Override
    public String format(Object value) {
        return value instanceof LocalDate date ? FORMATTER.format(date) : Objects.toString(value);
    }
}
