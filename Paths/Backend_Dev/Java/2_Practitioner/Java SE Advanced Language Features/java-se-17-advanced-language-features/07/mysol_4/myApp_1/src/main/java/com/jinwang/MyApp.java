package com.jinwang;

import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        System.out.println(">>> Chapter 7 – Example 4: Exceptions in Lambdas <<<");

        var names = List.of("Joe Smith", "Susan Miller", "Will Johnson");

        try (FileWriter out = new FileWriter("names.txt", StandardCharsets.UTF_8)) {

            System.out.println("Writing using regular for-loop:");
            for (String name : names) {
                out.write(name + "\n");
                System.out.println("• " + name);
            }

            System.out.println("\nWriting using lambda (exception handled inside lambda):");
            names.forEach(name -> {
                try {
                    out.write(name + "\n");
                    System.out.println("• " + name);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });

        } catch (IOException | RuntimeException e) {
            System.err.println("An error occurred: " + e.getMessage());
        }

        System.out.println("\n✅ Example 4 complete.");
    }

}
