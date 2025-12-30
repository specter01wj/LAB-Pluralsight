/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.examples.example10;

import java.math.BigDecimal;

/**
 * Example: Adding "wither" methods to records.
 */
public class RecordsExample10 {

    public static void main(String[] args) {
        var product = new Product(100123L, "Apples", "Tasty red apples");

        var line = new OrderLine(product, 6, new BigDecimal("5.94"));

        // You can of course not modify the fields of an immutable object. When you need a modified version of an immutable object, you need to make a copy
        // of the object with a different value for the field that you want to change. That can be a bit cumbersome.
        var newLine1 = new OrderLine(line.product(), line.quantity(), new BigDecimal("5.34"));

        // By using "wither" methods, we can make this code more clear.
        // Because each "wither" method returns an OrderLine object, these method calls can be chained.
        var newLine2 = line
                .withQuantity(8)
                .withPrice(new BigDecimal("7.92"));

        System.out.println(line);
        System.out.println(newLine1);
        System.out.println(newLine2);
    }
}
