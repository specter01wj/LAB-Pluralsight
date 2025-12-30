/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example05;

import java.math.BigDecimal;

public record OrderLine(Product product, int quantity, BigDecimal price) {
}
