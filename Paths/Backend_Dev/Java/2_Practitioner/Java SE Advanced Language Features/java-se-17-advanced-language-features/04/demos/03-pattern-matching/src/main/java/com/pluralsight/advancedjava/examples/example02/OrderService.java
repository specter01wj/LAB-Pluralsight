/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

import com.pluralsight.advancedjava.examples.model.DiscountOrderLine;
import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

import java.math.BigDecimal;

public class OrderService {

    public BigDecimal calculateTotalDiscount(Order order) {
        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            if (!(line instanceof DiscountOrderLine discount)) {
                continue;
            }

            // Note that the variable 'discount', which was declared by the pattern above,
            // is in scope here because the following line of code is only reachable if the instanceof expression is true.
            total = total.add(discount.amount());
        }

        return total;
    }

    public boolean hasSaleWithAmountGreaterThan(Order order, BigDecimal limit) {
        for (OrderLine line : order.lines()) {
            // We can use the variable 'sale' in an additional condition after the '&&' because there,
            // the instanceof expression is always true. (Note that this works because '&&' is short-circuiting).
            if (line instanceof SaleOrderLine sale && sale.amount().compareTo(limit) > 0) {
                return true;
            }
        }

        return false;
    }
}
