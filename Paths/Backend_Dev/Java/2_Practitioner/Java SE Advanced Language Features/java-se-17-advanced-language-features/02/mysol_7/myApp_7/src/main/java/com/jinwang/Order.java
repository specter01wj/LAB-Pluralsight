package com.jinwang;

import java.time.LocalDateTime;
import java.util.List;

import static com.jinwang.Validation.checkThat;

public record Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {

    // Compact canonical constructor
    public Order {
        checkThat(customer != null, "customer must not be null");
        checkThat(dateTime != null, "dateTime must not be null");
        checkThat(lines != null && !lines.isEmpty(), "lines must not be null or empty");

        // Defensive copy to preserve immutability
        lines = List.copyOf(lines);
    }

    // Static factory method as an alternative to additional constructors
    public static Order createOrderAtCurrentDateTime(
            long id,
            Customer customer,
            List<OrderLine> lines
    ) {
        return new Order(id, customer, LocalDateTime.now(), lines);
    }
}
