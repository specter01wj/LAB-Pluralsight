package com.model;

import java.time.LocalDateTime;
import java.util.List;

import static com.jinwang.Validation.checkThat;

public record Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {

    public Order {
        checkThat(customer != null, "Customer must not be null");
        checkThat(dateTime != null, "Date/time must not be null");
        checkThat(lines != null && !lines.isEmpty(), "Order lines must not be null or empty");

        lines = List.copyOf(lines); // Defensive copy
    }
}
