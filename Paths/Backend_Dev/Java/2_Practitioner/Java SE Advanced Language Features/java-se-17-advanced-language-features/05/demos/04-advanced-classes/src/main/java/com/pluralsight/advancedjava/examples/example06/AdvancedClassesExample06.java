/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example06;

import java.util.Random;

/**
 * Example 6: Instance initializer blocks.
 */
public class AdvancedClassesExample06 {

    private final byte[] randomBytes;

    // Instance initializer block.
    {
        randomBytes = new byte[16];
        new Random().nextBytes(randomBytes);
    }

    public static void main(String[] args) {
        var obj = new AdvancedClassesExample06();
        for (byte b : obj.randomBytes) {
            System.out.printf("%02X ", b);
        }
        System.out.println();
    }
}
