/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example04;

import com.pluralsight.advancedjava.examples.model.DiscountOrderLine;
import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

import java.math.BigDecimal;

public class OrderService {

    public String formatOrderLines(Order order) {
        var sb = new StringBuilder();

        for (OrderLine line : order.lines()) {
            // You can use a 'when' clause to add extra conditions to a case. For example, here we have separate cases
            // for a sale order line in which the quantity is 1 and other sale order lines.
            // Note that the order of the cases matters here. The more specific one (for quantity == 1) must come first.
            var text = switch (line) {
                case SaleOrderLine sale when sale.quantity() == 1 ->
                        String.format("%-20s %8s%n", sale.product().name(), sale.amount());
                case SaleOrderLine sale ->
                        String.format("%-14s (%3d) %8s%n", sale.product().name(), sale.quantity(), sale.amount());
                case DiscountOrderLine discount ->
                        String.format("Discount %-8s    %8s%n", discount.discountCode(), discount.amount().negate());
            };

            sb.append(text);
        }

        return sb.toString();
    }
}
