/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import org.junit.jupiter.api.*;

import java.lang.reflect.Method;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@DisplayName("Exercise 1")
@Order(1)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise01Test {

    @Test
    @DisplayName("Loggable is an annotation")
    @Order(1)
    void loggableIsAnAnnotation() {
        assertThat(Loggable.class.isAnnotation())
                .as("Loggable must be an annotation, currently it is not an annotation. See the instructions for the exercise.")
                .isTrue();
    }

    @Test
    @DisplayName("The 'value' element is defined correctly")
    @Order(2)
    void theValueElementIsDefinedCorrectly() {
        assertDoesNotThrow(() -> Loggable.class.getDeclaredMethod("value"),
                "Annotation Loggable does not contain a 'value' element");

        assertThat(getMethod(Loggable.class, "value").getReturnType())
                .as("The type of the 'value' element is incorrect")
                .isEqualTo(String.class);

        assertThat(getMethod(Loggable.class, "value").getDefaultValue())
                .as("The default value of the 'value' element is incorrect; it must be an empty string")
                .isEqualTo("");
    }

    @Test
    @DisplayName("The 'formatter' element is defined correctly")
    @Order(3)
    void theFormatterElementIsDefinedCorrectly() {
        assertDoesNotThrow(() -> Loggable.class.getDeclaredMethod("formatter"),
                "Annotation Loggable does not contain a 'formatter' element");

        assertThat(getMethod(Loggable.class, "formatter").getReturnType())
                .as("The type of the 'formatter' element is incorrect")
                .isEqualTo(Class.class);

        assertThat(getMethod(Loggable.class, "formatter").getDefaultValue())
                .as("The default value of the 'formatter' element is incorrect")
                .isEqualTo(ToStringLoggableFormatter.class);
    }

    private Method getMethod(Class<?> cls, String name) {
        try {
            return cls.getDeclaredMethod(name);
        } catch (NoSuchMethodException e) {
            throw new AssertionError("Failed to get method: " + name);
        }
    }
}
