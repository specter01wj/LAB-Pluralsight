package com.jinwang;

import java.util.Random;

public class MyApp {

    private final byte[] randomBytes;

    // Instance initializer block.
    {
        randomBytes = new byte[16];
        new Random().nextBytes(randomBytes);
    }

    public static void main(String[] args) {
        System.out.println(">>> Instance Initializer Block Study <<<\n");

        System.out.println("Step 1: Create two instances and compare their randomBytes\n");

        var obj1 = new MyApp();
        var obj2 = new MyApp();

        System.out.println("Random bytes from obj1:");
        printBytes(obj1.randomBytes);

        System.out.println("Random bytes from obj2:");
        printBytes(obj2.randomBytes);

        System.out.println("\n✅ Observation: Instance initializer runs for every new instance.");

        System.out.println("\nStep 2: Confirm length and non-null contents");

        System.out.println("Length check obj1: " + obj1.randomBytes.length);
        System.out.println("Length check obj2: " + obj2.randomBytes.length);

        System.out.println("\n✅ Study complete.");
    }

    private static void printBytes(byte[] bytes) {
        for (byte b : bytes) {
            System.out.printf("%02X ", b);
        }
        System.out.println();
    }

}
