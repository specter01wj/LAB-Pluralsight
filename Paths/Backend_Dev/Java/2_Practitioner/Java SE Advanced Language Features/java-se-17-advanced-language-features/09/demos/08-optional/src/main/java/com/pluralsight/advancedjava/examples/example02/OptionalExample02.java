/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example02;

import com.pluralsight.advancedjava.examples.Product;

import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Example 2: Functional programming with Optional.
 */
public class OptionalExample02 {

    public static void main(String[] args) {
        Optional<Product> optional = findProductById(269912L);

        // The method 'ifPresent' takes a Consumer which is called with the value in the Optional if it is not empty.
        optional.ifPresent(product -> System.out.println("Found product: " + product));

        // The method 'ifPresentOrElse' takes a Consumer and a Runnable.
        optional.ifPresentOrElse(
                product -> System.out.println("Found product: " + product),
                () -> System.out.println("Product not found"));

        // Optional has 'filter', 'map' and 'flatMap' methods, similar to streams.
        String text = optional.map(Product::name).orElse("Product not found");
        System.out.println(text);

        // Example using 'filter' and 'map'.
        Set<Long> discountedProductIds = Set.of(923569L, 404019L, 269912L, 837481L, 947848L, 289838L, 377290L);
        System.out.println(optional
                .filter(product -> discountedProductIds.contains(product.id()))
                .map(product -> "Discounted product: " + product.name())
                .orElse("No discounted product"));

        // If you have a Stream of Optionals, then you can use Stream.flatMap() with Optional.stream()
        // to convert it to a stream of values. The empty Optionals will be filtered out.
        Set<Long> productIds = Set.of(485845L, 236839L, 100178L, 592496L, 476371L, 373279L, 295695L, 199192L);
        List<Product> products = productIds.stream()
                .map(OptionalExample02::findProductById) // Stream of Optional of Product
                .flatMap(Optional::stream)
                .toList();
        products.forEach(System.out::println);
    }

    private static Optional<Product> findProductById(long productId) {
        // Implemented in a much more concise way using streams. Note that Stream.findFirst() returns an Optional.
        return Product.PRODUCTS.stream().filter(product -> product.id() == productId).findFirst();
    }
}
