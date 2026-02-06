package com.jinwang;

import java.io.*;
import java.nio.charset.StandardCharsets;

/**
 * Example 2: Working with resources and handling exceptions with try-with-resources.
 */
public class TryWithResourcesExample02 {

    public static void removeEmptyLines(String inputFileName, String outputFileName) throws IOException {
        try (
                BufferedReader in = new BufferedReader(new FileReader(inputFileName, StandardCharsets.UTF_8));
                BufferedWriter out = new BufferedWriter(new FileWriter(outputFileName, StandardCharsets.UTF_8))
        ) {
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
