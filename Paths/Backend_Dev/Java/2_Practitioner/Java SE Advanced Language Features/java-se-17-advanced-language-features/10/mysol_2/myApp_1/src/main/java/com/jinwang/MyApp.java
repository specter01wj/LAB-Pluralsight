package com.jinwang;

import java.nio.file.Files;
import java.nio.file.Path;
import java.io.IOException;

public class MyApp {
    public static void main(String[] args) {
        System.out.println(">>> Chapter 10 – Example 2: Try-With-Resources <<<");

        try {
            String input = "Apple\n\nBanana\n \nCarrot\n";
            Path inputPath = Path.of("example2-input.txt");
            Path outputPath = Path.of("example2-output.txt");

            // Write test input to file
            Files.writeString(inputPath, input);

            // Call your own class in com.jinwang
            TryWithResourcesExample02.removeEmptyLines(
                    inputPath.toString(),
                    outputPath.toString()
            );

            // Read and print result
            String result = Files.readString(outputPath);
            System.out.println("Cleaned content:\n" + result);
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("✅ Example 2 complete.\n");
    }
}
