package com.jinwang;

import java.time.LocalDateTime;
import java.util.List;

public record Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {

    // Canonical constructor for validation and defensive copy
    public Order {
        checkThat(customer != null, "Customer must not be null");
        checkThat(dateTime != null, "Date/time must not be null");
        checkThat(lines != null && !lines.isEmpty(), "Order lines must not be null or empty");

        this.lines = List.copyOf(lines); // defensive unmodifiable copy
    }
}
