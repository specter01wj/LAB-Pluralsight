package com.jinwang;

import java.math.BigDecimal;

import static com.jinwang.Validation.checkThat;

public record DiscountOrderLine(String discountCode, BigDecimal amount) implements OrderLine {

    public DiscountOrderLine {
        checkThat(discountCode != null && !discountCode.isBlank(), "discountCode must not be null or blank");
        checkThat(amount.compareTo(BigDecimal.ZERO) > 0, "amount must be greater than zero");
    }
}
