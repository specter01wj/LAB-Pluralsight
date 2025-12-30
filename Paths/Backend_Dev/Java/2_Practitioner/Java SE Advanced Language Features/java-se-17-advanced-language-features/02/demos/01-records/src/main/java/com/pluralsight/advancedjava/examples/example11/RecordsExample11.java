/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example11;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Example: Avoiding inefficiency when using "wither" methods.
 */
public class RecordsExample11 {

    public static void main(String[] args) {
        var product1 = new Product(100123L, "Apples", "Tasty red apples");
        var product2 = new Product(100346L, "Bread", "Whole-wheat loaf");

        var customer = new Customer(500567L, "Joe Smith", "joe.smith@example.com");

        // This looks elegant, but beware of the inefficiency: at each step in the chain of method calls, a new Order object is created
        // and the list of OrderLine objects is copied multiple times. This inefficiency is similar to concatenating strings in a loop.
        // The builder pattern, where you have a temporary mutable container to gather values before building the immutable object, is
        // much more efficient in this case. (And that's why for strings there is StringBuilder).
        var order = new Order(200201L, customer, LocalDateTime.now())
                .withLine(new OrderLine(product1, 6, new BigDecimal("5.94")))
                .withLine(new OrderLine(product2, 2, new BigDecimal("2.50")));

        System.out.println(order);
    }
}
