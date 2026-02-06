package com.jinwang;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class MyApp {
    public static void main(String[] args) {
        System.out.println(">>> Chapter 10 – Example 1: Manual Resource Management <<<");

        try {
            // Create test input file
            String input = "Line 1\n\nLine 2\n  \nLine 3\n";
            Path inputPath = Path.of("example1-input.txt");
            Path outputPath = Path.of("example1-output.txt");
            Files.writeString(inputPath, input);

            TryWithResourcesExample01.removeEmptyLines(
                    inputPath.toString(),
                    outputPath.toString()
            );

            // Read result and print
            String result = Files.readString(outputPath);
            System.out.println("Cleaned content:\n" + result);

        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("✅ Example 1 complete.\n");
    }
}
