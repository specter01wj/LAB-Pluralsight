package com.jinwang;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class MyApp {

    public static void main(String[] args) {
        var product1 = new Product(100123L, "Apples", "Tasty red apples");
        var product2 = new Product(100346L, "Bread", "Whole-wheat loaf");

        var customer = new Customer(500567L, "Joe Smith", "joe.smith@example.com");

        /*
         * ⚠️ This looks elegant, but is inefficient:
         * - Each withLine() call creates a new Order
         * - The list of OrderLine objects is copied multiple times
         *
         * This is similar to inefficient string concatenation in a loop.
         * A builder pattern would be more efficient in this scenario.
         */
        var order = new Order(200201L, customer, LocalDateTime.now())
                .withLine(new OrderLine(product1, 6, new BigDecimal("5.94")))
                .withLine(new OrderLine(product2, 2, new BigDecimal("2.50")));

        System.out.println(order);
    }

}
