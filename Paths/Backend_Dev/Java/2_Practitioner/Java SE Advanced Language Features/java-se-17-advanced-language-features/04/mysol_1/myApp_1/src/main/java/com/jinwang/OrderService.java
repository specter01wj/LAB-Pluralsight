package com.jinwang;

import com.pluralsight.advancedjava.examples.model.DiscountOrderLine;
import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

import java.math.BigDecimal;

/**
 * Service for calculating the total amount of an order.
 * Demonstrates pattern matching with instanceof.
 */
public class OrderService {

    public BigDecimal calculateTotalAmount(Order order) {
        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            // Pattern matching: no need to cast after checking instanceof.
            if (line instanceof SaleOrderLine sale) {
                total = total.add(sale.amount());
            } else if (line instanceof DiscountOrderLine discount) {
                total = total.subtract(discount.amount());
            }
        }

        return total;
    }
}
