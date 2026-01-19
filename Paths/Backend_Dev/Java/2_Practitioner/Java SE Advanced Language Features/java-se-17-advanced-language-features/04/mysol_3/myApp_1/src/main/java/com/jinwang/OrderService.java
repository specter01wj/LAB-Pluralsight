package com.jinwang;


import com.pluralsight.advancedjava.examples.model.DiscountOrderLine;
import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

import java.math.BigDecimal;

public class OrderService {

    public BigDecimal calculateTotalAmount(Order order) {
        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            // Pattern matching with switch statement
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
            // Pattern matching with switch expression (more concise and safe)
            var netAmount = switch (line) {
                case SaleOrderLine sale -> sale.amount();
                case DiscountOrderLine discount -> discount.amount().negate();
            };

            total = total.add(netAmount);
        }

        return total;
    }
}
