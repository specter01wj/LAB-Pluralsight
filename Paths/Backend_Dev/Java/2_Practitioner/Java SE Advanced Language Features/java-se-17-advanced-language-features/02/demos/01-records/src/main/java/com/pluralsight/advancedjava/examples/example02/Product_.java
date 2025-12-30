/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

import java.util.Objects;

/**
 * The Java compiler would translate the record {@link Product} to an immutable class that looks like this.
 * <p>
 * (Note: This is just and approximation; in reality, the name of the generated class is the same as the name of the record and the implementation of the
 * {@code equals(Object o)}, {@code hashCode()} and {@code toString()} methods that the compiler generates will be different).
 */
public final class Product_ /* extends java.lang.Record */ {

    // Private final fields
    private final long id;
    private final String name;
    private final String description;

    // A constructor with a parameter for each field
    public Product_(long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    // Accessor methods that have the same name as the components
    public long id() {
        return id;
    }

    public String name() {
        return name;
    }

    public String description() {
        return description;
    }

    // Additional method that was added to the record
    public boolean hasDescription() {
        return description != null && !description.isBlank();
    }

    // equals(Object o), hashCode() and toString() methods
    @Override
    public boolean equals(Object o) {
        return o instanceof Product_ other &&
                this.id == other.id && Objects.equals(this.name, other.name) && Objects.equals(this.description, other.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }

    @Override
    public String toString() {
        return "Product[id=" + id + ", name=" + name + ", description=" + description + "]";
    }
}
