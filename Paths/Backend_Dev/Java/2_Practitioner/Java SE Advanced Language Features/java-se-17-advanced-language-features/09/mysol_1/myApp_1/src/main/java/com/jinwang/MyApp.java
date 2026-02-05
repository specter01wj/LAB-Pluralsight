package com.jinwang;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.Random;

public class MyApp {

    private static final Random RANDOM = new Random();

    public static void main(String[] args) {
        System.out.println(">>> Chapter 9 – Example 1: Using Optional <<<");

        Optional<Product> optional = findProductById(269912L);

        Optional<Product> optional2 = Optional.ofNullable(getProductById(238461L));

        if (optional.isPresent()) {
            Product product = optional.get();
            System.out.println("Found product: " + product);
        } else {
            System.out.println("Product not found");
        }

        Product product1 = optional.orElse(new Product(527502L, "Milk", new BigDecimal("1.39")));
        System.out.println("Product: " + product1);

        Product product2 = optional.orElseGet(() ->
                Product.PRODUCTS.get(RANDOM.nextInt(Product.PRODUCTS.size())));
        System.out.println(product2);

        Product product3 = optional.orElseThrow(() -> new IllegalStateException("Product not found"));
        System.out.println(product3);

        System.out.println("✅ Example 1 complete.\n");
    }

    private static Product getProductById(long productId) {
        for (Product product : Product.PRODUCTS) {
            if (product.id() == productId) {
                return product;
            }
        }
        return null;
    }

    private static Optional<Product> findProductById(long productId) {
        for (Product product : Product.PRODUCTS) {
            if (product.id() == productId) {
                return Optional.of(product);
            }
        }
        return Optional.empty();
    }
}
