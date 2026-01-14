package com.jinwang;

import java.math.BigDecimal;

public class OrderService {

    public BigDecimal calculateTotalAmount(Order order) {
        BigDecimal total = BigDecimal.ZERO;

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
