/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

/**
 * Example of a record with the same functionality as the immutable class {@link ProductCls}.
 */
public record ProductRec(long id, String name, String description) {
}
