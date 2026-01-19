package com.jinwang;

import com.pluralsight.advancedjava.examples.model.Address;
import com.pluralsight.advancedjava.examples.model.Customer;
import com.pluralsight.advancedjava.examples.model.DiscountOrderLine;
import com.pluralsight.advancedjava.examples.model.Order;
import com.pluralsight.advancedjava.examples.model.OrderLine;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;

import java.math.BigDecimal;

public class OrderService {

    public BigDecimal calculateTotalAmount(Order order) {
        var total = BigDecimal.ZERO;

        for (OrderLine line : order.lines()) {
            // Pattern matching with record pattern to extract values from records
            var netAmount = switch (line) {
                case SaleOrderLine(var product, var quantity, var amount) -> amount;
                case DiscountOrderLine(var discountCode, var amount) -> amount.negate();
            };

            total = total.add(netAmount);
        }

        return total;
    }

    public String formatShippingAddress(Customer customer) {
        // Pattern matching with nested record pattern to extract inner fields
        return switch (customer) {
            case Customer(
                    var id,
                    var name,
                    var email,
                    Address(var street, var houseNumber, var city, var country)
            ) -> String.format("%s%n%s %s%n%s%n%s%n", name, street, houseNumber, city, country);
        };
    }
}
