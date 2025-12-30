/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example05;

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
            // With a record pattern, you can match a value against the shape of a record and get the elements of the record into separate variables.
            // Note: In future versions of Java, you will be able to replace the variable declarations for elements that you don't need with underscores.
            // (This is available as a preview feature in Java 21 and will likely become a standard feature in future versions).
            var netAmount = switch (line) {
                case SaleOrderLine(var product, var quantity, var amount) -> amount;
                case DiscountOrderLine(var discountCode, var amount) -> amount.negate();
            };

            total = total.add(netAmount);
        }

        return total;
    }

    public String formatShippingAddress(Customer customer) {
//        return String.format("%s%n%s %s%n%s%n%s%n", customer.name(), customer.shippingAddress().street(),
//                customer.shippingAddress().houseNumber(), customer.shippingAddress().city(), customer.shippingAddress().country());

        return switch (customer) {
            // The real power of record patterns comes from the fact that you can nest them.
            // This makes it possible to extract elements from a data structure that consists of records with a concise and clear syntax.
            case Customer(var id, var name, var email, Address(var street, var houseNumber, var city, var country)) ->
                    String.format("%s%n%s %s%n%s%n%s%n", name, street, houseNumber, city, country);
        };
    }
}
