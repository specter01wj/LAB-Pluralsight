package com.jinwang;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {

        System.out.println(">>> Chapter 10 – Exercise 1: Try-With-Resources <<<");

        try (var input = new ByteArrayInputStream("""
                Apple
                Banana

                Carrot
                """.getBytes(StandardCharsets.UTF_8))) {

            List<String> lines = Exercise01.readLines(input);
            lines.forEach(System.out::println);

        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("✅ Exercise 1 complete.\n");
    }
}
