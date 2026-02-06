package com.jinwang;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;

/**
 * Example 6: Implementing your own resource in practice.
 */
public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 10 – Example 6: Custom AutoCloseable Resource <<<");

        try (var tempDir = new TempDirectory("test");
             var out = Files.newBufferedWriter(tempDir.getDirectory().resolve("test.txt"), StandardCharsets.UTF_8)) {

            System.out.println("Temporary directory: " + tempDir.getDirectory());

            out.write("Pluralsight");

        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("✅ Example 6 complete.\n");
    }
}
