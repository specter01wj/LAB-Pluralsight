/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.function.Consumer;

/**
 * Exercise 2: Implementing AutoCloseable.
 * <p>
 * TODO: See the instructions below.
 *       Run the included unit test {@link Exercise02Test} to check if you have done this correctly.
 */
public class Exercise02 {

    // TODO: Make class TempFile implement interface AutoCloseable.
    //       In the close() method, delete the temporary file that is created in the constructor.
    //       Note: Think about what the 'throws' clause of the close() method must be in order for your code to compile.

    public static class TempFile {
        private final Path path;

        public TempFile() throws IOException {
            this.path = Files.createTempFile(null, null);
        }

        public Path getPath() {
            return path;
        }
    }

    public static void doWithTempFile(Consumer<Path> consumer) throws IOException {
        // TODO: Write a try-with-resources statement here in which you use a TempFile as a resource.
        //       Inside the try-block, call the consumer with the path of the temporary file that's stored in the TempFile.
    }
}
