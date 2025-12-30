/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import com.pluralsight.advancedjava.exercises.exercise01.LocalDateLoggableFormatter;
import com.pluralsight.advancedjava.exercises.exercise01.Loggable;

import java.time.LocalDate;

/**
 * A mutable class containing customer information.
 * <p>
 * TODO: See instructions below.
 * <p>
 * Run the included unit test {@link Exercise02Test} to check if you have done this correctly.
 */
public class Customer {

    /**
     * TODO: Apply the Loggable annotation to this field. You do not need to specify any element values.
     */
    private long id;

    private String name;

    private LocalDate birthDate;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    /**
     * TODO: Apply the Loggable annotation to this method.
     *       - For the 'value' element, specify the value: "name"
     */
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    /**
     * TODO: Apply the Loggable annotation to this method.
     *       - For the 'value' element, specify the value: "birthDate"
     *       - For the 'formatter' element, specify a class literal for class: LocalDateLoggableFormatter
     */
    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }
}
