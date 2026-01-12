package com.jinwang;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static com.jinwang.Validation.checkThat;

public record Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {

    public Order {
        checkThat(customer != null, "customer must not be null");
        checkThat(dateTime != null, "dateTime must not be null");
        checkThat(lines != null, "lines must not be null");

        // Defensive copy to preserve immutability
        lines = List.copyOf(lines);
    }

    // Convenience constructor for creating an empty order
    public Order(long id, Customer customer, LocalDateTime dateTime) {
        this(id, customer, dateTime, Collections.emptyList());
    }

    /*
     * ❌ BAD EXAMPLE:
     * Inefficient "wither" method.
     *
     * - Copies the list into a mutable ArrayList
     * - Adds one element
     * - Creates a new Order
     * - Constructor copies the list again
     */
    public Order withLine(OrderLine line) {
        var newLines = new ArrayList<OrderLine>(this.lines);
        newLines.add(line);
        return new Order(this.id, this.customer, this.dateTime, newLines);
    }
}
