/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example03;

public record Customer(long id, String name, String email) {

    // You can override the compiler-generated accessor methods. It's a good idea to use the @Override annotation when you do this to indicate to the compiler
    // that this method is intended to override an existing method (even if that a generated method).
    @Override
    public String name() {
        return name != null && !name.isBlank() ? name : "anonymous";
    }

    // Beware: There's a problem with this record, see RecordsExample03.
}
