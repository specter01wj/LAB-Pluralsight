/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example01;

import com.pluralsight.advancedjava.examples.Product;

import java.math.BigDecimal;
import java.util.Optional;
import java.util.Random;

/**
 * Example 1: Using Optional in practice.
 */
public class OptionalExample01 {

    private static final Random RANDOM = new Random();

    public static void main(String[] args) {
        // The method findProductById() returns an Optional of Product.
        Optional<Product> optional = findProductById(269912L);

        // Use ofNullable() to get from the nullable world to the Optional world.
        Optional<Product> optional2 = Optional.ofNullable(getProductById(238461L));

        // Use isPresent() to check if the Optional contains a value (or isEmpty() to check if it is empty).
        if (optional.isPresent()) {
            // Get the Product from the Optional. Note: Throws a NoSuchElementException if the Optional is empty.
            Product product = optional.get();
            System.out.println("Found product: " + product);
        } else {
            System.out.println("Product not found");
        }

        // The orElse() method returns the value in the Optional or the specified value if the Optional is empty.
        // You can use this also to go back from the Optional world to the nullable world, by using orElse(null).
        Product product1 = optional.orElse(new Product(527502L, "Milk", new BigDecimal("1.39")));
        System.out.println("Product: " + product1);

        // An alternative is orElseGet(), which takes a Supplier instead of a value.
        // This is useful if you don't want to create and initialize the alternative value unless the Optional is empty.
        Product product2 = optional.orElseGet(() -> Product.PRODUCTS.get(RANDOM.nextInt(Product.PRODUCTS.size())));
        System.out.println(product2);

        // If you want to throw an exception if the Optional is empty, use orElseThrow().
        Product product3 = optional.orElseThrow(() -> new IllegalStateException("Product not found"));
        System.out.println(product3);
    }

    // Method which returns null if the product was not found.
    private static Product getProductById(long productId) {
        for (Product product : Product.PRODUCTS) {
            if (product.id() == productId) {
                return product;
            }
        }

        return null; // No product with the specified product id
    }

    // Method which uses Optional.
    private static Optional<Product> findProductById(long productId) {
        for (Product product : Product.PRODUCTS) {
            if (product.id() == productId) {
                // Create an Optional that contains a value by using the 'of' factory method.
                // This is a generic method, the type argument of the Optional is inferred.
                return Optional.of(product);
            }
        }

        // Gets and returns an empty Optional. The type argument is inferred.
        return Optional.empty();
    }
}
