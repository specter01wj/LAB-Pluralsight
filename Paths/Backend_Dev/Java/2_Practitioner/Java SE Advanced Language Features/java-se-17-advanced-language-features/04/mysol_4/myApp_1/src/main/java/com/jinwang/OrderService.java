package com.jinwang;

import com.pluralsight.advancedjava.examples.model.DiscountOrderLine;
import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

import java.math.BigDecimal;

public class OrderService {

    public String formatOrderLines(Order order) {
        var sb = new StringBuilder();

        for (OrderLine line : order.lines()) {
            // Pattern matching with `when` clause adds specificity and readability
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
