/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise04;

import org.junit.jupiter.api.*;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.fail;

@DisplayName("Exercise 4")
@Order(4)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise04Test {

    @Test
    @DisplayName("Record Purchase contains a class Builder")
    @Order(1)
    void builderExists() {
        getBuilderClass();
    }

    @Test
    @DisplayName("Class Builder is static")
    @Order(2)
    void builderIsStatic() {
        assertThat(Modifier.isStatic(getBuilderClass().getModifiers())).as("Class Builder in record Purchase should be static").isTrue();
    }

    @Test
    @DisplayName("Class Builder has a no-args constructor")
    @Order(3)
    void builderHasNoArgsConstructor() {
        getBuilderConstructor();
    }

    @Test
    @DisplayName("Class Builder contains the expected methods")
    @Order(4)
    void builderContainsExpectedMethods() {
        var cls = getBuilderClass();
        getBuilderMethod(cls, "ofProduct", long.class);
        getBuilderMethod(cls, "withQuantity", int.class);
        getBuilderMethod(cls, "forPrice", BigDecimal.class);
        getBuilderMethod(cls, "atDateTime", LocalDateTime.class);
        getBuilderMethod(Purchase.class, "build");
    }

    @Test
    @DisplayName("Class Builder accumulates values and builds a Purchase object")
    @Order(5)
    void builderWorks() {
        var cls = getBuilderClass();
        var builder = assertDoesNotThrow(() -> getBuilderConstructor().newInstance(),
                "The test could not create an instance of class Builder");

        var ofProduct = getBuilderMethod(cls, "ofProduct", long.class);
        assertThat(callBuilderMethod(builder, ofProduct, 600678L))
                .as("The method 'ofProduct' should return the builder itself ('return this;')")
                .isSameAs(builder);

        var withQuantity = getBuilderMethod(cls, "withQuantity", int.class);
        assertThat(callBuilderMethod(builder, withQuantity, 12))
                .as("The method 'withQuantity' should return the builder itself ('return this;')")
                .isSameAs(builder);

        var forPrice = getBuilderMethod(cls, "forPrice", BigDecimal.class);
        assertThat(callBuilderMethod(builder, forPrice, new BigDecimal("239.95")))
                .as("The method 'withQuantity' should return the builder itself ('return this;')")
                .isSameAs(builder);

        var dateTime = LocalDateTime.now().minusDays(8L);
        var atDateTime = getBuilderMethod(cls, "atDateTime", LocalDateTime.class);
        assertThat(callBuilderMethod(builder, atDateTime, dateTime))
                .as("The method 'atDateTime' should return the builder itself ('return this;')")
                .isSameAs(builder);

        var build = getBuilderMethod(Purchase.class, "build");
        var result = callBuilderMethod(builder, build);
        assertThat(result).as("The method 'build' should return an instance of record Purchase").isInstanceOf(Purchase.class);

        var purchase = (Purchase) result;
        assertThat(purchase.productId()).as("The Purchase object does not contain the expected productId").isEqualTo(600678L);
        assertThat(purchase.quantity()).as("The Purchase object does not contain the expected quantity").isEqualTo(12);
        assertThat(purchase.price()).as("The Purchase object does not contain the expected price").isEqualTo(new BigDecimal("239.95"));
        assertThat(purchase.dateTime()).as("The Purchase object does not contain the expected dateTime").isEqualTo(dateTime);
    }

    private Class<?> getBuilderClass() {
        return Arrays.stream(Purchase.class.getDeclaredClasses())
                .filter(cls -> cls.getSimpleName().equals("Builder"))
                .findAny().orElseGet(() -> fail("Record Purchase should contain a class named 'Builder'"));
    }

    private Constructor<?> getBuilderConstructor() {
        var cls = getBuilderClass();
        var constructor = assertDoesNotThrow(() -> cls.getDeclaredConstructor(), "The builder should have a no-args constructor");

        assertThat(constructor.canAccess(null))
                .as("The constructor of class Builder is not accessible by the test")
                .isTrue();

        return constructor;
    }

    private Method getBuilderMethod(Class<?> expectedReturnType, String name, Class<?>... expectedParameterTypes) {
        var cls = getBuilderClass();
        Method method = assertDoesNotThrow(() -> cls.getDeclaredMethod(name, expectedParameterTypes),
                () -> String.format("The builder should have a method named '%s' with the correct parameters", name));

        assertThat(method.getReturnType())
                .as("The method '%s' should have return type: %s", name, expectedReturnType.getSimpleName())
                .isEqualTo(expectedReturnType);

        assertThat(Modifier.isStatic(method.getModifiers()))
                .as("The method '%s' should not be static", name)
                .isFalse();

        return method;
    }

    private Object callBuilderMethod(Object target, Method method, Object... args) {
        return assertDoesNotThrow(() -> method.invoke(target, args),
                () -> String.format("The test failed to call the method '%s' successfully", method.getName()));
    }
}
