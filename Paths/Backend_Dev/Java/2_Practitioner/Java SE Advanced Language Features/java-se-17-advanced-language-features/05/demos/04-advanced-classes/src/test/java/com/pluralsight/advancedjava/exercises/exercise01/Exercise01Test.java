/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import org.junit.jupiter.api.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Modifier;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Fail.fail;

@DisplayName("Exercise 1")
@Order(1)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise01Test {

    @Test
    @DisplayName("Class Exercise01 contains class Nested")
    @Order(1)
    void nestedClassExists() {
        assertThat(Exercise01.class.getDeclaredClasses()).extracting(Class::getSimpleName)
                .as("Class Exercise01 should contain a class named Nested")
                .contains("Nested");
    }

    @Test
    @DisplayName("Class Nested is static")
    @Order(2)
    void nestedClassIsStatic() {
        assertThat(Modifier.isStatic(getNestedClass().getModifiers())).as("Class Nested should be static").isTrue();
    }

    @Test
    @DisplayName("Class Nested has a void run() method")
    @Order(3)
    void nestedClassHasRunMethod() {
        try {
            var run = getNestedClass().getDeclaredMethod("run");
            assertThat(run.getReturnType()).as("The run() method should be void").isEqualTo(void.class);
        } catch (NoSuchMethodException e) {
            fail("Class Nested does not contain a void run() method");
        }
    }

    @Test
    @DisplayName("The run() method calls the static method in its enclosing class")
    @Order(4)
    void runMethodCallsStaticMethodFromEnclosingClass() {
        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            System.setOut(new PrintStream(out, true, StandardCharsets.UTF_8));

            var run = getNestedClass().getDeclaredMethod("run");
            run.setAccessible(true);
            run.invoke(getNestedClass().getDeclaredConstructor().newInstance());

            var result = out.toString(StandardCharsets.UTF_8);
            assertThat(result.replaceAll("\n", "#").replaceAll("\r", "").split("#"))
                    .as("The run() method is supposed to call the static method of its enclosing class and print whatever it returns using System.out.println()")
                    .containsExactly("Hello from a static method in the enclosing class");
        } catch (InstantiationException | IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            fail("Unexpected error in test");
        }
    }

    private Class<?> getNestedClass() {
        return Arrays.stream(Exercise01.class.getDeclaredClasses()).filter(cls -> cls.getSimpleName().equals("Nested"))
                .findAny().orElseThrow(() -> new NoClassDefFoundError("Nested"));
    }
}
