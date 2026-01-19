package com.model;

import java.math.BigDecimal;

import static com.jinwang.Validation.checkThat;

// An order line that represents a discount, identified by a code and amount.
public record DiscountOrderLine(String discountCode, BigDecimal amount) implements OrderLine {

    public DiscountOrderLine {
        checkThat(discountCode != null && !discountCode.isBlank(), "Discount code must not be null or blank");
        checkThat(amount != null && amount.compareTo(BigDecimal.ZERO) > 0, "Amount must be greater than zero");
    }
}
