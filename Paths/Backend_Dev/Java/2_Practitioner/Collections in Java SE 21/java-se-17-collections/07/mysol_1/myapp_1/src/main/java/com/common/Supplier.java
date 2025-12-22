package com.common;

import java.util.ArrayList;
import java.util.List;


public class Supplier {
    private final String name;
    private final List<Product> products = new ArrayList<>();

    public Supplier(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    // Return the actual mutable list, since MyApp is modifying it
    public List<Product> getProducts() {
        return products;
    }

    @Override
    public String toString() {
        return "Supplier{" +
                "name='" + name + '\'' +
                ", products=" + products +
                '}';
    }
}
