/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

/**
 * Example 2: Using a sealed interface and records for representing algebraic data types.
 */
public class SealedExample01 {

    public static void main(String[] args) {
        var customer = new Customer(500567L, "Joe Smith", "joe.smith@example.com");
        var product = new Product(100123L, "Apples", "Tasty red apples");

        var order = new Order(200201L, customer, LocalDateTime.now(), List.of(
                new SaleOrderLine(product, 6, new BigDecimal("5.94")),
                new DiscountOrderLine("WELCOME", new BigDecimal("2.50"))));

        var orderService = new OrderService();
        var total = orderService.calculateTotalAmount(order);
        System.out.printf("Total amount: %s%n", total);
    }
}
