/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example05;

import java.time.LocalDateTime;
import java.util.List;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

public record Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {

    // You can implement the canonical constructor yourself, for example to validate arguments or make defensive copies of mutable arguments.
    public Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {
        // Validation of the arguments.
        checkThat(customer != null, "customer must not be null");
        checkThat(dateTime != null, "dateTime must not be null");
        checkThat(lines != null && !lines.isEmpty(), "lines must not be null or empty");

        // The canonical constructor must initialize all fields of the record.
        this.id = id;
        this.customer = customer;
        this.dateTime = dateTime;
        this.lines = List.copyOf(lines); // Making an unmodifiable defensive copy of the argument (which might be a mutable List).
    }
}
