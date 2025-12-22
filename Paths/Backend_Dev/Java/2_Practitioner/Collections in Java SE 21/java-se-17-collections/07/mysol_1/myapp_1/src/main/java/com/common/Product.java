package com.common;

import java.util.Comparator;
import java.util.Objects;

public record Product(String name, int weight) {

    public static final Comparator<Product> BY_WEIGHT =
            Comparator.comparingInt(Product::weight);

    @Override
    public String toString() {
        return "Product{name='%s', weight=%d}".formatted(name, weight);
    }

    // (Optional) Defensive null-checks — only needed if you want stricter validation:
    public Product {
        Objects.requireNonNull(name, "name must not be null");
        if (weight < 0) {
            throw new IllegalArgumentException("weight must be non-negative");
        }
    }
}
