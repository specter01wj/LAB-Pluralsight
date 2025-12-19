package com.jinwang;

import com.common.Product;

import java.util.*;
import static java.util.Comparator.comparingInt;

public class MyApp {

    public static void main(String[] args) {
        // StreamProducts

    }

    // ✅ Stream version: concise and expressive
    private static List<String> namesOfLightProductsSorted(List<Product> products) {
        return products.stream()
                .filter(product -> product.getWeight() < 30)
                .sorted(comparingInt(Product::getWeight))
                .map(Product::getName)
                .toList();  // Java 16+, otherwise use .collect(Collectors.toList())
    }

    // ✅ Loop version: verbose but equivalent logic
    private static List<String> namesOfLightProductsSortedLoop(List<Product> products) {
        List<Product> lightProducts = new ArrayList<>();

        for (Product product : products) {
            if (product.getWeight() < 30) {
                lightProducts.add(product);
            }
        }

        lightProducts.sort(comparingInt(Product::getWeight));

        List<String> productNames = new ArrayList<>();
        for (Product product : lightProducts) {
            productNames.add(product.getName());
        }

        return Collections.unmodifiableList(productNames);
    }
}
