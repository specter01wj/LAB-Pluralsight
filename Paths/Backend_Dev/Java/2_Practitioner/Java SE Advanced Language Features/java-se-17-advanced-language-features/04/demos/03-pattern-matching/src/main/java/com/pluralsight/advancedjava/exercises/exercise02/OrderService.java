/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import com.pluralsight.advancedjava.examples.model.DiscountOrderLine;
import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

import java.math.BigDecimal;

/**
 * Exercise 2: Using record patterns in a switch statement.
 * <p>
 * TODO: In the code below, type patterns are used in the switch statement to handle sale and discount order lines.
 *       Rewrite the two cases with record patterns instead of type patterns.
 *       Hint: In the first case, use a nested record pattern to declare a variable that contains the product name.
 *       Run the included unit test {@link Exercise02Test} to check if the method still works correctly after your changes.
 */
public class OrderService {

    public void printOrder(Order order) {
        System.out.printf("Order %d for %s at %s%n%n", order.id(), order.customer().name(), order.dateTime());

        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            switch (line) {
                case SaleOrderLine sale -> {
                    System.out.printf("%-14s (%3d) %8s%n", sale.product().name(), sale.quantity(), sale.amount());
                    total = total.add(sale.amount());
                }
                case DiscountOrderLine discount -> {
                    System.out.printf("Discount %-8s    %8s%n", discount.discountCode(), discount.amount().negate());
                    total = total.subtract(discount.amount());
                }
            }
        }

        System.out.printf("%nOrder total:         %8s%n", total);
    }

}
