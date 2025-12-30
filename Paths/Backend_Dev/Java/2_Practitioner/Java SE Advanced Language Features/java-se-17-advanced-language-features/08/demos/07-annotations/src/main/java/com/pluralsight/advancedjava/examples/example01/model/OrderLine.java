/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01.model;

import java.math.BigDecimal;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

public record OrderLine(Product product, int quantity, BigDecimal amount) {

    public OrderLine {
        checkThat(product != null, "product must not be null");
        checkThat(amount != null, "amount must not be null");
    }
}
