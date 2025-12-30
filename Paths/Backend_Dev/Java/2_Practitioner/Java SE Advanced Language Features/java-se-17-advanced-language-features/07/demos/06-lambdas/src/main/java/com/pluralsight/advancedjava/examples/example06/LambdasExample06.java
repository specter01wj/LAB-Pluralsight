/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example06;

import java.math.BigDecimal;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.Collectors;

/**
 * Example 6: Method references.
 * <p>
 * There are four different kinds of method references. The example below shows examples of all four.
 */
public class LambdasExample06 {

    public static void main(String[] args) {
        var products = List.of(
                new Product(100123L, "Apples", new BigDecimal("2.25")),
                new Product(100578L, "Oranges", new BigDecimal("4.09")),
                new Product(100393L, "Cheese", new BigDecimal("6.99")),
                new Product(100346L, "Bread", new BigDecimal("3.49")));

        // LambdasExample06::isExpensive is a method reference to a static method.
        // In front of the :: is the name of the class that contains the static method.
        var expensiveProducts = products.stream().filter(LambdasExample06::isExpensive).toList();

        // System.out::println is a method reference to an instance method of a particular object.
        // In front of the :: is a reference to a particular object (System.out, which is a PrintStream).
        System.out.println("Expensive products:");
        expensiveProducts.forEach(System.out::println);

        // In the following line of code there are two method references, Product::price and BigDecimal::add,
        // which are both method references to instance methods. But in this case, what's before the :: is not
        // a reference to a particular object, but the class name.
        // The methods that are referred to will be called on the object that's relevant in the context where they are used.
        var totalPrice = products.stream().map(Product::price).reduce(BigDecimal.ZERO, BigDecimal::add);
        System.out.println("Total price: " + totalPrice);

        // TreeSet::new is a method reference to a constructor.
        var productNames = products.stream().map(Product::name).collect(Collectors.toCollection(TreeSet::new));
        System.out.println(productNames);
    }

    static boolean isExpensive(Product product) {
        return product.price().compareTo(new BigDecimal("4.00")) >= 0;
    }
}

record Product(long id, String name, BigDecimal price) {}
