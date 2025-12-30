/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

import java.math.BigDecimal;

public class OrderService {

    public BigDecimal calculateTotalAmount(Order order) {
        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            if (line instanceof SaleOrderLine) {
                SaleOrderLine sale = (SaleOrderLine) line;
                total = total.add(sale.amount());
            } else if (line instanceof DiscountOrderLine) {
                DiscountOrderLine discount = (DiscountOrderLine) line;
                total = total.subtract(discount.amount());
            }
        }

        return total;
    }
}
