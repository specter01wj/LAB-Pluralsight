package com.jinwang;

import java.time.LocalDateTime;
import java.util.List;

import static com.jinwang.Validation.checkThat;

public record Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {

    public Order(long id, Customer customer, LocalDateTime dateTime, List<OrderLine> lines) {
        checkThat(customer != null, "Customer must not be null");
        checkThat(dateTime != null, "Date/time must not be null");
        checkThat(lines != null && !lines.isEmpty(), "Order lines must not be null or empty");

        this.id = id;
        this.customer = customer;
        this.dateTime = dateTime;
        this.lines = List.copyOf(lines);
    }
}
