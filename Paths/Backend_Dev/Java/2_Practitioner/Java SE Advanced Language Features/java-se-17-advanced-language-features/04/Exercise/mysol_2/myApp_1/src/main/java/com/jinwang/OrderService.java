package com.jinwang;

import com.model.DiscountOrderLine;
import com.model.Order;
import com.model.OrderLine;
import com.model.SaleOrderLine;
import com.model.Product;

import java.math.BigDecimal;

public class OrderService {

    public void printOrder(Order order) {
        System.out.printf("Order %d for %s at %s%n%n", order.id(), order.customer().name(), order.dateTime());

        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            switch (line) {
                // ✅ Using nested record pattern to extract Product name directly
                case SaleOrderLine(Product(var id, var name, var desc), var quantity, var amount) -> {
                    System.out.printf("%-14s (%3d) %8s%n", name, quantity, amount);
                    total = total.add(amount);
                }
                // ✅ Record pattern for DiscountOrderLine
                case DiscountOrderLine(var discountCode, var amount) -> {
                    System.out.printf("Discount %-8s    %8s%n", discountCode, amount.negate());
                    total = total.subtract(amount);
                }
            }
        }

        System.out.printf("%nOrder total:         %8s%n", total);
    }
}
