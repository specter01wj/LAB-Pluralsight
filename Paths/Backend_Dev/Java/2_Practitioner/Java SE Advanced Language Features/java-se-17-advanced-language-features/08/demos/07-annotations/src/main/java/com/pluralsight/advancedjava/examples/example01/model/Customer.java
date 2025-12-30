/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01.model;

import java.util.Map;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

public record Customer(long id, String name, String emailAddress) {

    public static final Map<Long, Customer> CUSTOMERS_BY_ID = Map.of(
            500567L, new Customer(500567L, "Joe Smith", "joe.smith@example.com"),
            923461L, new Customer(923461L, "Susan Jones", "susan.jones@example.com"),
            123974L, new Customer(123974L, "Ann Miller", "miller.a@example.com"),
            234079L, new Customer(234079L, "Derek Baker", "baker123@example.com"));

    public Customer {
        checkThat(name != null && !name.isBlank(), "name must not be null or blank");
        checkThat(emailAddress != null && !emailAddress.isBlank(), "emailAddress must not be null or blank");
    }
}
