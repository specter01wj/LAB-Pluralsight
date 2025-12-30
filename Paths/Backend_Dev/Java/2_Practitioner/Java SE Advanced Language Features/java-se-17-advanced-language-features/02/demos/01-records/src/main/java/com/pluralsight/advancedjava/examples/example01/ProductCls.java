/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

import java.util.Objects;

/**
 * Example of an immutable class.
 */
public final class ProductCls { // The class itself is final

    // Private final fields
    private final long id;
    private final String name;
    private final String description;

    // A constructor with a parameter for each field
    public ProductCls(long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    // Getter methods for the fields
    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    // equals(Object o), hashCode() and toString() methods
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProductCls that = (ProductCls) o;
        return id == that.id && Objects.equals(name, that.name) && Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }

    @Override
    public String toString() {
        return "ProductCls{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
