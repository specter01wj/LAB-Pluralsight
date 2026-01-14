package com.jinwang;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class MyApp {

    public static void main(String[] args) {
        var product1 = new Product(100123L, "Apples", "Tasty red apples");
        var product2 = new Product(100346L, "Bread", "Whole-wheat loaf");

        var customer = new Customer(500567L, "Joe Smith", "joe.smith@example.com");

        var order = new Order(200201L, customer, LocalDateTime.now())
                .withLine(new SaleOrderLine(product1, 6, new BigDecimal("5.94"), new BigDecimal("0.99")))
                .withLine(new DiscountOrderLine(product2, 2, new BigDecimal("2.50"), new BigDecimal("0.25")));

        var totalPrice = OrderService.calculateTotalPrice(order);

        System.out.println("Total price of order: " + totalPrice);
    }

}
