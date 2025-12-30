/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

/**
 * Example of a record.
 */
public record Product(long id, String name, String description) {

    // You can add additional methods to a record just like you can add methods to a regular class.
    public boolean hasDescription() {
        return description != null && !description.isBlank();
    }
}
