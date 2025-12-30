/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example06;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;

/**
 * Example 6: Implementing your own resource in practice.
 */
public class TryWithResourcesExample06 {

    public static void main(String[] args) {
        // Use TempDirectory in a try-with-resources statement
        try (var tempDir = new TempDirectory("test");
             var out = Files.newBufferedWriter(tempDir.getDirectory().resolve("test.txt"), StandardCharsets.UTF_8)) {
            System.out.println("Temporary directory: " + tempDir.getDirectory());

            // Write something to the temporary file
            out.write("Pluralsight");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
