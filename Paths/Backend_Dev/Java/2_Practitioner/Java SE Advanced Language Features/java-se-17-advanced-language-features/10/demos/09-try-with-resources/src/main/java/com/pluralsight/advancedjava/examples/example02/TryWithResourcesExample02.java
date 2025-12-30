/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

import java.io.*;
import java.nio.charset.StandardCharsets;

/**
 * Example 2: Working with resources and handling exceptions with try-with-resources.
 */
public class TryWithResourcesExample02 {

    public static void removeEmptyLines(String inputFileName, String outputFileName) throws IOException {
        try (BufferedReader in = new BufferedReader(new FileReader(inputFileName, StandardCharsets.UTF_8));
             BufferedWriter out = new BufferedWriter(new FileWriter(outputFileName, StandardCharsets.UTF_8))) {
            // Copy all non-empty lines from input to output
            String line;
            while ((line = in.readLine()) != null) {
                if (!line.trim().isEmpty()) {
                    out.write(line);
                    out.write(System.lineSeparator());
                }
            }
        }
    }
}
