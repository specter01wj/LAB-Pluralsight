/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example11;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

public record Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {

    public Order {
        checkThat(customer != null, "customer must not be null");
        checkThat(dateTime != null, "dateTime must not be null");
        checkThat(lines != null, "lines must not be null");

        lines = List.copyOf(lines);
    }

    public Order(long id, Customer customer, LocalDateTime dateTime) {
        this(id, customer, dateTime, Collections.emptyList());
    }

    // BAD EXAMPLE: This is an inefficient "wither" method. It copies the list of order lines into a mutable ArrayList, adds the new order line
    // and then creates a new Order object using the new list. The constructor is going to copy the mutable list again to make a defensive copy.
    public Order withLine(OrderLine line) {
        var newLines = new ArrayList<OrderLine>(this.lines);
        newLines.add(line);
        return new Order(this.id, this.customer, this.dateTime, newLines);
    }
}
