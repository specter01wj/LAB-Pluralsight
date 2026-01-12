package com.jinwang;

import java.math.BigDecimal;

import static com.jinwang.Validation.checkThat;

public record OrderLine(Product product, int quantity, BigDecimal price) {

    public OrderLine {
        checkThat(product != null, "product must not be null");
        checkThat(price != null, "price must not be null");
    }

}
