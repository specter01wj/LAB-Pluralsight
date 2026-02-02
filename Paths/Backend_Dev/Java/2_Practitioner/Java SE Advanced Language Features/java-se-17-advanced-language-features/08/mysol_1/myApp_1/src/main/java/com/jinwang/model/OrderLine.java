package com.jinwang.model;

import java.math.BigDecimal;

import static com.jinwang.common.Validation.checkThat;

public record OrderLine(Product product, int quantity, BigDecimal amount) {

    public OrderLine {
        checkThat(product != null, "product must not be null");
        checkThat(amount != null, "amount must not be null");
    }
}
