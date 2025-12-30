/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises;

import java.util.List;

public record Customer(long id, String name, String emailAddress) {

    public static List<Customer> CUSTOMERS = List.of(
            new Customer(500567L, "Joe Smith", "joe.smith@example.com"),
            new Customer(923461L, "Susan Jones", "susan.jones@example.com"),
            new Customer(234507L, "Louise Miller", "lmiller@example.com"),
            new Customer(478828L, "Will Johnson", "wj@example.com"),
            new Customer(788276L, "John Baker", "jg_baker@example.com"));
}
