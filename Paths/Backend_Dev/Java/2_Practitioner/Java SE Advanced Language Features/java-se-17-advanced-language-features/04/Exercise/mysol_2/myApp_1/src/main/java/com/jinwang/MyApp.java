package com.jinwang;

import com.model.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

public class MyApp {

    public static void main(String[] args) {
        var apples = new Product(101L, "Apples", "Red and juicy");
        var bread = new Product(102L, "Bread", "Whole-wheat");

        var customer = new Customer(5001L, "Joe Smith", "joe@example.com",
                new Address("Main Street", "123A", "Springfield", "USA"));

        var order = new Order(3001L, customer, LocalDateTime.now(), List.of(
                new SaleOrderLine(apples, 1, new BigDecimal("2.99")),
                new SaleOrderLine(bread, 2, new BigDecimal("6.00")),
                new DiscountOrderLine("SAVE10", new BigDecimal("1.50"))
        ));

        var service = new OrderService();
        service.printOrder(order);
    }

}
