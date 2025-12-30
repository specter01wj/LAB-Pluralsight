/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example07;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

public record Product(long id, String name, String description) {

    // Compact constructor.
    public Product {
        checkThat(name != null && !name.isBlank(), "name must not be null or blank");
    }

    // You can provide additional constructors. Additional constructors in records are required to have a call to another constructor (using "this(...);")
    // as their first statement. This ensures that the canonical constructor is always called.
    public Product(long id, String name) {
        this(id, name, null);
    }
}
