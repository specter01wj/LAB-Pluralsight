/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import org.junit.jupiter.api.*;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@DisplayName("Exercise 1")
@Order(1)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise01Test {

    @Test
    @DisplayName("Class Customer is not a record")
    @Order(1)
    void customerIsNotRecord() {
        assertThat(Customer.class.isRecord())
                .as("For this exercise, you are not supposed to make class Customer a record")
                .isFalse();
    }

    @Test
    @DisplayName("Class Customer is final")
    @Order(2)
    void customerMustBeFinal() {
        assertThat(Modifier.isFinal(Customer.class.getModifiers()))
                .as("Class Customer must be final to prevent anyone from creating a mutable subclass")
                .isTrue();
    }

    @Test
    @DisplayName("Class Customer contains three private final fields")
    @Order(3)
    void customerContainsExpectedFields() {
        assertThat(Customer.class.getDeclaredFields()).extracting(Field::getName)
                .as("Class Customer should contain exactly three fields: id, name and email")
                .containsExactlyInAnyOrder("id", "name", "email");

        checkImmutableField("id", int.class);
        checkImmutableField("name", String.class);
        checkImmutableField("email", String.class);
    }

    @Test
    @DisplayName("Class Customer contains a constructor with parameters for the fields")
    @Order(4)
    void customerContainsExpectedConstructor() {
        assertDoesNotThrow(() -> Customer.class.getDeclaredConstructor(int.class, String.class, String.class),
                "There should be a constructor that takes three parameters, for the id, name and email fields, but no such constructor was found");
    }

    @Test
    @DisplayName("Class Customer contains getter methods for the fields")
    @Order(5)
    void customerContainsExpectedGetterMethods() {
        checkGetterMethod("getId", int.class);
        checkGetterMethod("getName", String.class);
        checkGetterMethod("getEmail", String.class);
    }

    @Test
    @DisplayName("Class Customer does not contain setter methods")
    @Order(6)
    void customerContainsNoSetterMethods() throws NoSuchFieldException, NoSuchMethodException {
        assertThat(Customer.class.getDeclaredMethods()).extracting(Method::getName)
                .as("The class must not contain setter methods")
                .noneMatch(name -> name.startsWith("set"));
    }

    private void checkImmutableField(String name, Class<?> expectedType) {
        Field field = assertDoesNotThrow(() -> Customer.class.getDeclaredField(name),
                () -> String.format("There should be a field named '%s'", name));

        assertThat(field.getType())
                .as("The field '%s' should be of type: %s", name, expectedType.getSimpleName())
                .isEqualTo(expectedType);

        int modifiers = field.getModifiers();
        assertThat(Modifier.isPrivate(modifiers)).as("Fields in an immutable class should be private, but the field '%s' is not private", name).isTrue();
        assertThat(Modifier.isFinal(modifiers)).as("Fields in an immutable class should be final, but the field '%s' is not final", name).isTrue();
        assertThat(Modifier.isStatic(modifiers)).as("The field '%s' should not be static", name).isFalse();
        assertThat(Modifier.isTransient(modifiers)).as("Whether a field is transient or not is not relevant for immutability. You did not need to make the field '%s' transient", name).isFalse();
        // No need to check for volatile; if a field is final it cannot be volatile
    }

    private void checkGetterMethod(String name, Class<?> expectedReturnType) {
        Method method = assertDoesNotThrow(() -> Customer.class.getDeclaredMethod(name),
                () -> String.format("There should be a method named '%s' that takes no arguments", name));

        assertThat(method.getReturnType())
                .as("The getter method '%s' should have return type: %s", name, expectedReturnType.getSimpleName())
                .isEqualTo(expectedReturnType);

        int modifiers = method.getModifiers();
        assertThat(Modifier.isPrivate(modifiers)).as("The getter method '%s' should not be private", name).isFalse();
        assertThat(Modifier.isFinal(modifiers)).as("It is not necessary to make getter methods final, which you did with the method '%s'", name).isFalse();
        assertThat(Modifier.isStatic(modifiers)).as("The getter method '%s' should not be static", name).isFalse();
        assertThat(Modifier.isSynchronized(modifiers)).as("Whether a getter method is synchronized or not is not relevant for immutability. You did not need to make the method '%s' synchronized", name).isFalse();
    }
}
