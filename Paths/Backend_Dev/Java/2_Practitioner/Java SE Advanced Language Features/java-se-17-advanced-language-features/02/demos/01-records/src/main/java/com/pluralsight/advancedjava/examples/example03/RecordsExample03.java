/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example03;

/**
 * Example: Overriding accessor methods of a record.
 */
public class RecordsExample03 {

    public static void main(String[] args) {
        // In record Customer, the accessor method for the component 'name' is overridden. If 'name' is null, it returns "anonymous".
        var customer = new Customer(500567L, null, null);
        System.out.println(customer.name());

        // Watch out for the following issue: If you override an accessor method so that it returns something else than the field value, and you make a copy
        // of the record like this, then the copy will not be equal to the original. In the original, the field 'name' is null, while in the copy, the field
        // contains the value "anonymous". This is considered bad style!
        var copy = new Customer(customer.id(), customer.name(), customer.email());
        System.out.println("The copy should be equal to the original, but copy.equals(customer) returns: " + copy.equals(customer));

        System.out.println(customer);
        System.out.println(copy);
    }
}
