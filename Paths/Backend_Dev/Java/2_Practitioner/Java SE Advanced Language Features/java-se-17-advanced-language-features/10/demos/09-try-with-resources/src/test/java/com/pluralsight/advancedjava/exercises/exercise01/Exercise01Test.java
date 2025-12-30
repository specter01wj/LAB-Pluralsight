/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import org.junit.jupiter.api.*;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.fail;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;

@DisplayName("Exercise 1")
@Order(1)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise01Test {

    private static final String TEXT = """
            This is the first line of text.
            This is the second line of text.
            And here is the third and final line.
            """;

    private static class TestInputStream extends InputStream {
        private final ByteArrayInputStream in = new ByteArrayInputStream(TEXT.getBytes(StandardCharsets.UTF_8));

        private final boolean doThrow;
        private int readCount;
        private int closeCount;

        private TestInputStream(boolean doThrow) {
            this.doThrow = doThrow;
        }

        @Override
        public int read() throws IOException {
            if (++readCount > 50 && doThrow) throw new IOException("Test");
            return in.read();
        }

        @Override
        public void close() throws IOException {
            closeCount++;
            super.close();
        }
    }

    @Test
    @DisplayName("The method 'readLines' works correctly when no exception occurs")
    @Order(1)
    void readLinesHappyFlowWorksCorrectly() {
        var in = new TestInputStream(false);

        var result = assertDoesNotThrow(() -> Exercise01.readLines(in), "The method 'readLines' unexpectedly threw an exception");

        assertThat(result)
                .as("The method 'readLines' did not return the expected result")
                .containsExactly("This is the first line of text.", "This is the second line of text.", "And here is the third and final line.");

        if (in.closeCount == 0) fail("The method 'readLines' did not close the InputStream");
        if (in.closeCount > 1) fail("The method 'readLines' closed the InputStream multiple times");
    }

    @Test
    @DisplayName("The method 'readLines' works correctly when an exception occurs while reading")
    @Order(1)
    void readLinesErrorFlowWorksCorrectly() {
        var in = new TestInputStream(true);

        assertThrows(IOException.class, () -> Exercise01.readLines(in), "The method 'readLines' swallowed an IOException");

        if (in.closeCount == 0) fail("The method 'readLines' did not close the InputStream");
        if (in.closeCount > 1) fail("The method 'readLines' closed the InputStream multiple times");
    }
}
