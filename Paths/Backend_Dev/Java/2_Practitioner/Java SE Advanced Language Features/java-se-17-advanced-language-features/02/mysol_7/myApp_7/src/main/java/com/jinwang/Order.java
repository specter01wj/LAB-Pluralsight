package com.jinwang;

import java.time.LocalDateTime;
import java.util.List;

import static com.jinwang.Validation.checkThat;

public record Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {

    // Compact constructor: validates inputs and defensively copies the mutable list
    public Order {
        checkThat(customer != null, "customer must not be null");
        checkThat(dateTime != null, "dateTime must not be null");
        checkThat(lines != null && !lines.isEmpty(), "lines must not be null or empty");

        // ⚠️ Create a defensive unmodifiable copy
        lines = List.copyOf(lines); // Valid syntax: reassignment to parameter before implicit assignment
    }
}
