package com.jinwang;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;

public class MyApp {

    public static void main(String[] args) {
        var apples = new Product(100123L, "Apples", "Tasty red apples");
        var bread = new Product(100346L, "Bread", "Whole-wheat loaf");

        var customer = new Customer(500567L, "Joe Smith", "joe.smith@example.com");

        var lines = new ArrayList<OrderLine>();
        lines.add(new OrderLine(apples, 6, new BigDecimal("5.94")));
        lines.add(new OrderLine(bread, 2, new BigDecimal("2.50")));

        var order = new Order(200201L, customer, LocalDateTime.now(), lines);
        System.out.println("Initial order:\n" + order);

        // Add another line to the original list
        var bananas = new Product(100892L, "Bananas", "Yellow bananas");
        var extraLine = new OrderLine(bananas, 1, new BigDecimal("0.99"));
        lines.add(extraLine);
        System.out.println("\nOrder after modifying original list:\n" + order);

        // Try to modify internal list from the order (should throw)
        try {
            order.lines().add(extraLine);
        } catch (UnsupportedOperationException ex) {
            System.out.println("\n❌ Cannot modify order lines: list is unmodifiable.");
        }
    }

}
