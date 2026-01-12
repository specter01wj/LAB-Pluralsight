package com.jinwang;

import java.math.BigDecimal;

public class MyApp {

    public static void main(String[] args) {
        var product = new Product(100123L, "Apples", "Tasty red apples");

        var line = new OrderLine(product, 6, new BigDecimal("5.94"));

        // Creating a modified copy manually (more verbose)
        var newLine1 = new OrderLine(
                line.product(),
                line.quantity(),
                new BigDecimal("5.34")
        );

        // Using "wither" methods for better readability and chaining
        var newLine2 = line
                .withQuantity(8)
                .withPrice(new BigDecimal("7.92"));

        System.out.println(line);
        System.out.println(newLine1);
        System.out.println(newLine2);
    }

}
