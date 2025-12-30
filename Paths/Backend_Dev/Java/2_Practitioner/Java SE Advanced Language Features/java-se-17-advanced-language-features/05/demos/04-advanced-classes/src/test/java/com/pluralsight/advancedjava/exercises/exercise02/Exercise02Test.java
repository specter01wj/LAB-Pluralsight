/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import org.junit.jupiter.api.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 2")
@Order(2)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise02Test {

    @Test
    @DisplayName("The run() method prints the expected values")
    @Order(1)
    void runMethodPrintsExpectedValues() {
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        System.setOut(new PrintStream(out, true, StandardCharsets.UTF_8));

        new Exercise02.Nested().run();

        assertThat(Arrays.asList(out.toString(StandardCharsets.UTF_8).replaceAll("\n", "#").replaceAll("\r", "").split("#")))
                .as("The run() method did not print the expected values")
                .containsExactly(Exercise02.Nested.TEST_UUID.toString(), Exercise02.TEST_UUID.toString());
    }
}
