package com.jinwang;


import com.model.DiscountOrderLine;
import com.model.Order;
import com.model.OrderLine;
import com.model.SaleOrderLine;

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
