/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise03;

import org.junit.jupiter.api.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 3")
@Order(3)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class Exercise03Test {

    @Test
    @DisplayName("The run() method prints the expected values")
    @Order(1)
    void runMethodPrintsExpectedValues() {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        System.setOut(new PrintStream(out, true, StandardCharsets.UTF_8));

        new Exercise03().run();

        var result = out.toString(StandardCharsets.UTF_8);
        assertThat(result.replaceAll("\n", "#").replaceAll("\r", "").split("#"))
                .as("The run() method did not print the expected values")
                .containsExactly("Hello from the run() method in the inner class");
    }
}
