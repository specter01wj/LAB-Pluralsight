/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import com.pluralsight.advancedjava.examples.model.Address;
import com.pluralsight.advancedjava.examples.model.Customer;
import com.pluralsight.advancedjava.examples.model.Product;
import com.pluralsight.advancedjava.examples.model.SaleOrderLine;
import org.junit.jupiter.api.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 1")
@Order(1)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise01Test {

    @Test
    @DisplayName("OrderService.containsSaleOfProduct() finds sale with product")
    @Order(1)
    void containsSaleOfProductFindsSaleWithProduct() {
        var customer = new Customer(201L, "Test", "test@pluralsight.com", new Address("Teststreet", "1", "Testcity", "USA"));
        var order = new com.pluralsight.advancedjava.examples.model.Order(101L, customer, LocalDateTime.now(), List.of(
                new SaleOrderLine(new Product(301L, "Product 301", "Description"), 1, new BigDecimal("1.35")),
                new SaleOrderLine(new Product(302L, "Product 302", "Description"), 2, new BigDecimal("3.80"))));

        assertThat(new OrderService().containsSaleOfProduct(order, 301))
                .as("OrderService.containsSaleOfProduct() did not find product 301")
                .isTrue();
        assertThat(new OrderService().containsSaleOfProduct(order, 302))
                .as("OrderService.containsSaleOfProduct() did not find product 302")
                .isTrue();
    }

    @Test
    @DisplayName("OrderService.containsSaleOfProduct() does not find product with unknown id")
    @Order(2)
    void containsSaleOfProductDoesNotFindProductWithUnknownId() {
        var customer = new Customer(201L, "Test", "test@pluralsight.com", new Address("Teststreet", "1", "Testcity", "USA"));
        var order = new com.pluralsight.advancedjava.examples.model.Order(101L, customer, LocalDateTime.now(), List.of(
                new SaleOrderLine(new Product(301L, "Product 301", "Description"), 1, new BigDecimal("1.35")),
                new SaleOrderLine(new Product(302L, "Product 302", "Description"), 2, new BigDecimal("3.80"))));

        assertThat(new OrderService().containsSaleOfProduct(order, 303))
                .as("OrderService.containsSaleOfProduct() should not find product 303")
                .isFalse();
    }
}
