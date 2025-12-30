/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example03;

import com.pluralsight.advancedjava.examples.model.DiscountOrderLine;
import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

import java.math.BigDecimal;

public class OrderService {

    public BigDecimal calculateTotalAmount(Order order) {
        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            // You can use pattern matching in switch statements and expressions as well.
            // Here is how you would write example 1 with a switch statement instead of a series of if instanceof ... else if instanceof ... statements.
            switch (line) {
                case SaleOrderLine sale -> total = total.add(sale.amount());
                case DiscountOrderLine discount -> total = total.subtract(discount.amount());
            }
        }

        return total;
    }

    public BigDecimal calculateTotalAmount2(Order order) {
        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            // Even better is a switch expression. This has the added benefit of exhaustiveness checking,
            // which works here because OrderLine is a sealed interface with a known set of implementing classes.
            // This would not compile anymore when a new type of order line would be added.
            var netAmount = switch (line) {
                case SaleOrderLine sale -> sale.amount();
                case DiscountOrderLine discount -> discount.amount().negate();
            };

            total = total.add(netAmount);
        }

        return total;
    }
}
