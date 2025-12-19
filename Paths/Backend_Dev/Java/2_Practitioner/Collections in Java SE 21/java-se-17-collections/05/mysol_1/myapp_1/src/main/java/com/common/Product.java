package com.common;

import java.util.*;

public class Product {
    private final int id;
    private final String name;
    private final int weight;

    public Product(final int id, final String name, final int weight) {
        this.id = id;
        this.name = Objects.requireNonNull(name, "Product name must not be null");
        this.weight = weight;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getWeight() {
        return weight;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", weight=" + weight +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Product)) return false;

        Product product = (Product) o;
        return id == product.id &&
                weight == product.weight &&
                Objects.equals(name, product.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, weight);
    }
}
