package com.jinwang;

import java.io.IOException;
import java.util.Properties;

public class MyApp {

    private static final Properties CONFIGURATION = new Properties();

    // Static initializer block
    static {
        try {
            CONFIGURATION.load(MyApp.class.getResourceAsStream("/example.properties"));
        } catch (IOException e) {
            throw new RuntimeException("Error while loading configuration", e);
        }
    }

    public static void main(String[] args) {
        System.out.println(">>> Static Initializer Block Study <<<\n");

        System.out.println("Step 1: Print property from loaded configuration file");
        String message = CONFIGURATION.getProperty("message");
        System.out.println("CONFIGURATION.getProperty(\"message\"): " + message);

        System.out.println("\nStep 2: Accessing a missing property");
        String missing = CONFIGURATION.getProperty("missingKey");
        System.out.println("CONFIGURATION.getProperty(\"missingKey\"): " + missing);

        System.out.println("\nStep 3: Confirm static block doesn't rerun");
        System.out.println("Accessing CONFIGURATION again...");
        System.out.println("Property 'message': " + CONFIGURATION.getProperty("message"));

        System.out.println("\n✅ Study complete.");
    }

}
