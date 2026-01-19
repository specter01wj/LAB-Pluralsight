package com.jinwang;

import com.pluralsight.advancedjava.examples.model.DiscountOrderLine;
import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

import java.math.BigDecimal;

/**
 * OrderService using pattern matching with instanceof in filtering logic.
 */
public class OrderService {

    public BigDecimal calculateTotalDiscount(Order order) {
        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            if (!(line instanceof DiscountOrderLine discount)) {
                continue;
            }

            // The variable 'discount' is in scope only if the pattern matches
            total = total.add(discount.amount());
        }

        return total;
    }

    public boolean hasSaleWithAmountGreaterThan(Order order, BigDecimal limit) {
        for (OrderLine line : order.lines()) {
            // 'sale' is in scope only if pattern matches and condition passes
            if (line instanceof SaleOrderLine sale && sale.amount().compareTo(limit) > 0) {
                return true;
            }
        }

        return false;
    }
}
