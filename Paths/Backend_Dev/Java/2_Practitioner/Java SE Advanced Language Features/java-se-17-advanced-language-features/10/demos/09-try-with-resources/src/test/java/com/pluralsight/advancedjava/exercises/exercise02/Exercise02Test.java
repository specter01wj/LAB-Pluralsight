/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import org.junit.jupiter.api.*;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.file.Path;
import java.util.function.Consumer;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@DisplayName("Exercise 2")
@Order(2)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise02Test {

    @Test
    @DisplayName("Class TempFile implements AutoCloseable")
    @Order(1)
    void classTempFileIsAutoCloseable() {
        assertThat(AutoCloseable.class.isAssignableFrom(Exercise02.TempFile.class))
                .as("Class TempFile does not implement interface AutoCloseable")
                .isTrue();
    }

    @Test
    @DisplayName("Class TempFile creates and deletes a file")
    @Order(2)
    void classTempFileCreatesAndDeletesFile() {
        var tempFile = assertDoesNotThrow(Exercise02.TempFile::new, "Creating a new TempFile unexpectedly threw an exception");

        assertThat(tempFile.getPath().toFile().exists())
                .as("Creating a new TempFile did not create a temporary file")
                .isTrue();

        Method closeMethod;
        try {
            closeMethod = Exercise02.TempFile.class.getDeclaredMethod("close");
        } catch (NoSuchMethodException e) {
            throw new AssertionError("Method 'close' not found in class TempFile");
        }

        try {
            closeMethod.invoke(tempFile);
        } catch (IllegalAccessException | InvocationTargetException e) {
            throw new AssertionError("Method 'close' threw an exception", e);
        }

        assertThat(tempFile.getPath().toFile().exists())
                .as("Closing the TempFile did not delete the temporary file")
                .isFalse();
    }

    @Test
    @DisplayName("The method 'doWithTempFile' works correctly when no exception occurs")
    @Order(3)
    void doWithTempFileHappyFlowWorksCorrectly() {
        class TestConsumer implements Consumer<Path> {
            private Path path;

            @Override
            public void accept(Path path) {
                assertThat(path.toFile().exists()).as("Temporary file does not exist").isTrue();
                this.path = path;
            }
        }

        var consumer = new TestConsumer();
        assertDoesNotThrow(() -> Exercise02.doWithTempFile(consumer));

        assertThat(consumer.path)
                .as("The method 'doWithTempFile' doesn't seem to have called the consumer")
                .isNotNull();

        assertThat(consumer.path.toFile().exists())
                .as("The temporary file has not been deleted after calling 'doWithTempFile'")
                .isFalse();
    }

    @Test
    @DisplayName("The method 'doWithTempFile' works correctly when an exception is thrown")
    @Order(4)
    void doWithTempFileErrorFlowWorksCorrectly() {
        class TestConsumer implements Consumer<Path> {
            private Path path;

            @Override
            public void accept(Path path) {
                assertThat(path.toFile().exists()).as("Temporary file does not exist").isTrue();
                this.path = path;
                throw new RuntimeException("Test");
            }
        }

        var consumer = new TestConsumer();
        assertThatThrownBy(() -> Exercise02.doWithTempFile(consumer)).isInstanceOf(RuntimeException.class);


        assertThat(consumer.path)
                .as("The method 'doWithTempFile' doesn't seem to have called the consumer")
                .isNotNull();

        assertThat(consumer.path.toFile().exists())
                .as("The temporary file has not been deleted after calling 'doWithTempFile'")
                .isFalse();
    }
}
