/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example04;

public record Customer(long id, String name, String email) {

    // Overridden accessor method.
    @Override
    public String name() {
        return name != null && !name.isBlank() ? name : "anonymous";
    }

    // You can override the compiler-generated equals(Object o) and hashCode() methods. You might want to do this, for example, if you want to compare instances
    // of the record on only a subset of the components. In this example, we compare only by id.
    @Override
    public boolean equals(Object o) {
        return o instanceof Customer other && this.id == other.id;
    }

    @Override
    public int hashCode() {
        return Long.hashCode(id);
    }

    // You can also override the toString() method.
    @Override
    public String toString() {
        return "[" + id + "] " + name;
    }
}
