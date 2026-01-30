package com.jinwang;

import java.util.Comparator;
import java.util.List;

public class Exercise04 {

    void sortProductsByName(List<Product> products) {
        // Anonymous class to sort by product name
        products.sort(new Comparator<Product>() {
            @Override
            public int compare(Product p1, Product p2) {
                return p1.name().compareTo(p2.name());
            }
        });
    }
}
