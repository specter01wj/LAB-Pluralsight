/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

import java.math.BigDecimal;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

// An order line that represents the sale of a particular quantity of a product, for a specified amount.
public record SaleOrderLine(Product product, int quantity, BigDecimal amount) implements OrderLine {

    public SaleOrderLine {
        checkThat(product != null, "product must not be null");
        checkThat(quantity > 0, "quantity must be greater than zero");
        checkThat(amount.compareTo(BigDecimal.ZERO) > 0, "amount must be greater than zero");
    }
}
