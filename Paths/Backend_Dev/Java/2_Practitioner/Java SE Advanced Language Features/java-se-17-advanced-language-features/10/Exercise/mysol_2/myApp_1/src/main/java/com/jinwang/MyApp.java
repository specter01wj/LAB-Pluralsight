package com.jinwang;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;

public class MyApp {
    public static void main(String[] args) {
        // === Chapter 10 – Exercise 2: Implementing AutoCloseable ===
        System.out.println(">>> Chapter 10 – Exercise 2: Implementing AutoCloseable <<<");

        try {
            Exercise02.doWithTempFile(tempPath -> {
                try {
                    Files.writeString(tempPath, "Hello from Exercise 2!", StandardCharsets.UTF_8);
                    System.out.println("Temp file path: " + tempPath);
                    System.out.println("Temp file contents: " + Files.readString(tempPath));
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("✅ Exercise 2 complete.\n");
    }
}
