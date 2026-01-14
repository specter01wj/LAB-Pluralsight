package com.jinwang;

import java.math.BigDecimal;

import static com.jinwang.Validation.checkThat;

public record SaleOrderLine(Product product, int quantity, BigDecimal amount)
        implements OrderLine {

    public SaleOrderLine {
        checkThat(product != null, "product must not be null");
        checkThat(quantity > 0, "quantity must be greater than zero");
        checkThat(amount.compareTo(BigDecimal.ZERO) > 0,
                "amount must be greater than zero");
    }
}
