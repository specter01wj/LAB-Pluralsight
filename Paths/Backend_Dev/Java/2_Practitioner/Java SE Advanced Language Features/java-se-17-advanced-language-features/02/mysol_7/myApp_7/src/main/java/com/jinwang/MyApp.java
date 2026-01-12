package com.jinwang;

import java.math.BigDecimal;
import java.util.ArrayList;

public class MyApp {

    public static void main(String[] args) {
        var product1 = new Product(100123L, "Apples");
        var product2 = new Product(100346L, "Bread");

        var customer = new Customer(500567L, "Joe Smith", "joe.smith@example.com");

        var lines = new ArrayList<OrderLine>();
        lines.add(new OrderLine(product1, 6, new BigDecimal("5.94")));
        lines.add(new OrderLine(product2, 2, new BigDecimal("2.50")));

        // Create an order using the static factory method
        var order = Order.createOrderAtCurrentDateTime(200201L, customer, lines);
        System.out.println(order);
    }

}
