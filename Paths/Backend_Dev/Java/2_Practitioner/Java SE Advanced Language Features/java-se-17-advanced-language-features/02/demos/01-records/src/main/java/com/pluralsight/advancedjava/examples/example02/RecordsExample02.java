/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

/**
 * Example: Creating an instance of a record and calling accessor and additional methods.
 */
public class RecordsExample02 {

    public static void main(String[] args) {
        // Creating an instance of a record works exactly the same way as creating an instance of a regular class.
        var product = new Product(100123L, "Apples", "Tasty red apples");

        // The accessor methods have the same names as the components of the record (and not names that start with 'get', like JavaBeans).
        System.out.printf("Product '%s' has id: %d%n", product.name(), product.id());
        System.out.println("Does this product have a description? " + product.hasDescription());
    }
}
