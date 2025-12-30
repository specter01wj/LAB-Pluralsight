/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import com.pluralsight.advancedjava.examples.model.*;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.*;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 2")
@Order(2)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise02Test {

    @Test
    @DisplayName("OrderService.printOrder() prints the expected output")
    @Order(1)
    void printOrderPrintsExpectedOutput() {
        var customer = new Customer(201L, "Test", "test@pluralsight.com", new Address("Teststreet", "1", "Testcity", "USA"));
        var dateTime = LocalDateTime.now();
        var order = new com.pluralsight.advancedjava.examples.model.Order(101L, customer, dateTime, List.of(
                new SaleOrderLine(new Product(301L, "Product 301", "Description"), 1, new BigDecimal("1.35")),
                new SaleOrderLine(new Product(302L, "Product 302", "Description"), 2, new BigDecimal("3.80")),
                new DiscountOrderLine("WELCOME", new BigDecimal("2.50"))));

        var stdOut = System.out;

        var buffer = new ByteArrayOutputStream();
        var testOut = new PrintStream(buffer);
        System.setOut(testOut);

        new OrderService().printOrder(order);

        System.setOut(stdOut);

        var result = buffer.toString(StandardCharsets.UTF_8);
        assertThat(result).isEqualTo("""
                Order 101 for Test at %s

                Product 301    (  1)     1.35
                Product 302    (  2)     3.80
                Discount WELCOME        -2.50

                Order total:             2.65
                """.formatted(dateTime));
    }
}
