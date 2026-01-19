package com.model;

import java.math.BigDecimal;

import static com.Validation.checkThat;

// An order line that represents the sale of a product in a given quantity and amount.
public record SaleOrderLine(Product product, int quantity, BigDecimal amount) implements OrderLine {

    public SaleOrderLine {
        checkThat(product != null, "Product must not be null");
        checkThat(quantity > 0, "Quantity must be greater than zero");
        checkThat(amount != null && amount.compareTo(BigDecimal.ZERO) > 0, "Amount must be greater than zero");
    }
}
