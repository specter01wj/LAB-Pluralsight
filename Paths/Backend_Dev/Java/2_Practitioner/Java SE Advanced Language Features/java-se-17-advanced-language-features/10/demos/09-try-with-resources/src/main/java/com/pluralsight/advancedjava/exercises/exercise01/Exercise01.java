/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

/**
 * Exercise 1: Using a try-with-resources statement.
 * <p>
 * TODO: The code below works, but it has no error handling.
 *       If an exception occurs while reading, it will not properly close the BufferedReader and InputStream.
 *       Rewrite the code below with a try-with-resources statement, so that it closes the BufferedReader and InputStream
 *       even when an exception occurs.
 *       Run the included unit test {@link Exercise01Test} to check if you have done this correctly.
 * <p>
 * Hint: Do you need to call close() on the reader yourself when you use try-with-resources?
 */
public class Exercise01 {

    public static List<String> readLines(InputStream in) throws IOException {
        var lines = new ArrayList<String>();

        var reader = new BufferedReader(new InputStreamReader(in, StandardCharsets.UTF_8));
        String line;
        while ((line = reader.readLine()) != null) {
            lines.add(line);
        }
        reader.close();

        return lines;
    }

}
