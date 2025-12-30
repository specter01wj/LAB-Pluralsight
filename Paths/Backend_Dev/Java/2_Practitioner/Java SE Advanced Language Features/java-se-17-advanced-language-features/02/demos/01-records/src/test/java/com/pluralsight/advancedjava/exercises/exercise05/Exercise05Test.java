/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise05;

import org.junit.jupiter.api.*;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@DisplayName("Exercise 5")
@Order(5)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise05Test {

    @Test
    @DisplayName("Record Address contains a 'withStreet' method that does what's expected")
    @Order(1)
    void withStreetExistsAndWorks() {
        callWitherMethod(
                new Address("Teststreet", "10", "Bug City", "Null Island"),
                new Address("Assertion Road", "10", "Bug City", "Null Island"),
                getWitherMethod("withStreet", String.class), "Assertion Road");
    }

    @Test
    @DisplayName("Record Address contains a 'withHouseNumber' method that does what's expected")
    @Order(2)
    void withHouseNumberExistsAndWorks() {
        callWitherMethod(
                new Address("Teststreet", "10", "Bug City", "Null Island"),
                new Address("Teststreet", "23", "Bug City", "Null Island"),
                getWitherMethod("withHouseNumber", String.class), "23");
    }

    @Test
    @DisplayName("Record Address contains a 'withCity' method that does what's expected")
    @Order(3)
    void withCityExistsAndWorks() {
        callWitherMethod(
                new Address("Teststreet", "10", "Bug City", "Null Island"),
                new Address("Teststreet", "10", "Verificationtown", "Null Island"),
                getWitherMethod("withCity", String.class), "Verificationtown");
    }

    @Test
    @DisplayName("Record Address contains a 'withCountry' method that does what's expected")
    @Order(4)
    void withCountryExistsAndWorks() {
        callWitherMethod(
                new Address("Teststreet", "10", "Bug City", "Null Island"),
                new Address("Teststreet", "10", "Bug City", "Emptyland"),
                getWitherMethod("withCountry", String.class), "Emptyland");
    }

    private Method getWitherMethod(String name, Class<?>... expectedParameterTypes) {
        Method method = assertDoesNotThrow(() -> Address.class.getDeclaredMethod(name, expectedParameterTypes),
                () -> String.format("The builder should have a method named '%s' with the correct parameters", name));

        assertThat(method.getReturnType())
                .as("The method '%s' should have return type: Address", name)
                .isEqualTo(Address.class);

        assertThat(Modifier.isStatic(method.getModifiers()))
                .as("The method '%s' should not be static", name)
                .isFalse();

        return method;
    }

    private void callWitherMethod(Address target, Address expectedResult, Method method, Object... args) {
        var actualResult = assertDoesNotThrow(() -> method.invoke(target, args),
                () -> String.format("The test failed to call the method '%s' successfully", method.getName()));

        assertThat(actualResult)
                .as("The method '%s' did not return the expected result", method.getName())
                .isEqualTo(expectedResult);
    }
}
