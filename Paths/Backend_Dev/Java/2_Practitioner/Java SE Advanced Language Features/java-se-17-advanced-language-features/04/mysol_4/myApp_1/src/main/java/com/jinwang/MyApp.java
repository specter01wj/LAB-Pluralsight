package com.jinwang;

import com.model.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        var product1 = new Product(100123L, "Apples", "Tasty red apples");
        var product2 = new Product(100346L, "Bread", "Whole-wheat loaf");

        var address = new Address("Main Street", "123A", "Springfield", "USA");
        var customer = new Customer(500567L, "Joe Smith", "joe.smith@example.com", address);

        var order = new Order(
                200201L,
                customer,
                LocalDateTime.now(),
                List.of(
                        new SaleOrderLine(product1, 1, new BigDecimal("0.99")),   // quantity == 1
                        new SaleOrderLine(product2, 3, new BigDecimal("7.50")),   // quantity > 1
                        new DiscountOrderLine("WELCOME", new BigDecimal("2.50"))
                )
        );

        var service = new OrderService();
        var formatted = service.formatOrderLines(order);

        System.out.println(formatted);
    }

}
