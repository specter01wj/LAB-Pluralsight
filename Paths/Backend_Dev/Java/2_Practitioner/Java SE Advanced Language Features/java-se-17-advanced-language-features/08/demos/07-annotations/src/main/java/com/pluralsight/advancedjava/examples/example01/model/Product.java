/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01.model;

import java.math.BigDecimal;
import java.util.Map;

import static com.pluralsight.advancedjava.examples.Validation.checkThat;

public record Product(long id, String name, String description, BigDecimal price) {

    public static Map<Long, Product> PRODUCTS_BY_ID = Map.of(
            100123L, new Product(100123L, "Apples", "Tasty red apples", new BigDecimal("0.59")),
            100346L, new Product(100346L, "Bread", "Whole-wheat loaf", new BigDecimal("2.49")),
            100838L, new Product(100838L, "Oranges", "Juicy oranges", new BigDecimal("0.89")));

    public Product {
        checkThat(name != null && !name.isBlank(), "name must not be null or blank");
        checkThat(price != null, "price must not be null");
    }
}
