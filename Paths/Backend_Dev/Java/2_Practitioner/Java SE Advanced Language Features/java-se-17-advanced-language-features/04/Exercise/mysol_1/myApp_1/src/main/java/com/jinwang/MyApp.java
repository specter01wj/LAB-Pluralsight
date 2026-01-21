package com.jinwang;

import com.model.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        var product1 = new Product(1, "Apples", "Red apples");
        var product2 = new Product(2, "Bread", "Whole wheat bread");

        var customer = new Customer(
                100,
                "Joe Smith",
                "joe@example.com",
                new Address("Main St", "1", "Springfield", "USA")
        );

        var order = new Order(
                200,
                customer,
                LocalDateTime.now(),
                List.of(
                        new SaleOrderLine(product1, 2, new BigDecimal("5.00")),
                        new DiscountOrderLine("WELCOME", new BigDecimal("1.00"))
                )
        );

        var service = new OrderService();

        System.out.println("Contains Apples? " +
                service.containsSaleOfProduct(order, 1)); // true

        System.out.println("Contains Bread? " +
                service.containsSaleOfProduct(order, 2)); // false
    }

}
