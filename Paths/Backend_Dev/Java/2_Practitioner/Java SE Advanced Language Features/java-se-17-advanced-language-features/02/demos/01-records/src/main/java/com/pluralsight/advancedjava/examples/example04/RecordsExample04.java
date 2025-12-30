/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example04;

/**
 * Example: Overriding the {@code equals(Object o)}, {@code hashCode()} and {@code toString()} methods of a record.
 */
public class RecordsExample04 {

    public static void main(String[] args) {
        // In record Customer, the equals(Object o) and hashCode() methods have been overridden to compare instances by id only.
        var customer = new Customer(500567L, null, null);
        var copy = new Customer(customer.id(), customer.name(), customer.email());

        System.out.println(customer);
        System.out.println(copy);

        // Now, the original and the copy are considered equal even though their name fields have different contents.
        System.out.println("The copy should be equal to the original, and copy.equals(customer) returns: " + copy.equals(customer));
    }
}
