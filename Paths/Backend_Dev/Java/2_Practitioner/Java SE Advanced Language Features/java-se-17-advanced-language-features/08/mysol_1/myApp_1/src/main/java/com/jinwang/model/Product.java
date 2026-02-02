package com.jinwang.model;

import java.math.BigDecimal;
import java.util.Map;

import static com.jinwang.common.Validation.checkThat;

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
