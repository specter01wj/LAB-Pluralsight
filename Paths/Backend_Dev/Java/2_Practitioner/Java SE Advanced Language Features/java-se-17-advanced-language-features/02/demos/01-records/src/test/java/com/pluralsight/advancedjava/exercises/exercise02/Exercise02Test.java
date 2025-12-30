/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import org.junit.jupiter.api.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertThrows;

@DisplayName("Exercise 2")
@Order(2)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise02Test {

    @Test
    @DisplayName("Date and time must be in the past")
    @Order(1)
    void dateAndTimeMustBeInThePast() {
        var dateTime = LocalDateTime.now().minusSeconds(1L);
        var purchase = assertDoesNotThrow(() -> new Purchase(600678L, 1, BigDecimal.ONE, dateTime),
                "Creating a Purchase with a date and time in the past should not throw an exception");

        assertThat(purchase.productId()).as("The Purchase object does not contain the expected productId").isEqualTo(600678L);
        assertThat(purchase.quantity()).as("The Purchase object does not contain the expected quantity").isEqualTo(1);
        assertThat(purchase.price()).as("The Purchase object does not contain the expected price").isEqualTo(BigDecimal.ONE);
        assertThat(purchase.dateTime()).as("The Purchase object does not contain the expected dateTime").isEqualTo(dateTime);

    }

    @Test
    @DisplayName("Date and time must not be in the future")
    @Order(2)
    void dateAndTimeMustNotBeInTheFuture() {
        assertThrows(IllegalArgumentException.class, () -> new Purchase(600678L, 1, BigDecimal.ONE, LocalDateTime.now().plusSeconds(1L)),
                "Creating a Purchase with a date and time in the future should throw an IllegalArgumentException");
    }

    @Test
    @DisplayName("Quantity must be greater than zero")
    @Order(3)
    void quantityMustBeGreaterThanZero() {
        var dateTime = LocalDateTime.now().minusDays(1L);
        var purchase = assertDoesNotThrow(() -> new Purchase(600678L, 1, BigDecimal.ONE, dateTime),
                "Creating a Purchase with a quantity greater than zero should not throw an exception");

        assertThat(purchase.productId()).as("The Purchase object does not contain the expected productId").isEqualTo(600678L);
        assertThat(purchase.quantity()).as("The Purchase object does not contain the expected quantity").isEqualTo(1);
        assertThat(purchase.price()).as("The Purchase object does not contain the expected price").isEqualTo(BigDecimal.ONE);
        assertThat(purchase.dateTime()).as("The Purchase object does not contain the expected dateTime").isEqualTo(dateTime);
    }

    @Test
    @DisplayName("Quantity must not be equal to zero")
    @Order(4)
    void quantityMustNotBeZero() {
        assertThrows(IllegalArgumentException.class, () -> new Purchase(600678L, 0, BigDecimal.ONE, LocalDateTime.now().minusDays(1L)),
                "Creating a Purchase with a quantity equal to zero should throw an IllegalArgumentException");
    }

    @Test
    @DisplayName("Quantity must not be less than than zero")
    @Order(5)
    void quantityMustNotBeLessThanZero() {
        assertThrows(IllegalArgumentException.class, () -> new Purchase(600678L, -1, BigDecimal.ONE, LocalDateTime.now().minusDays(1L)),
                "Creating a Purchase with a quantity less than zero should throw an IllegalArgumentException");
    }

    @Test
    @DisplayName("Price must be greater than zero")
    @Order(6)
    void priceMustBeGreaterThanZero() {
        var dateTime = LocalDateTime.now().minusDays(1L);
        var purchase = assertDoesNotThrow(() -> new Purchase(600678L, 1, new BigDecimal("0.01"), dateTime),
                "Creating a Purchase with a price greater than zero should not throw an exception");

        assertThat(purchase.productId()).as("The Purchase object does not contain the expected productId").isEqualTo(600678L);
        assertThat(purchase.quantity()).as("The Purchase object does not contain the expected quantity").isEqualTo(1);
        assertThat(purchase.price()).as("The Purchase object does not contain the expected price").isEqualTo(new BigDecimal("0.01"));
        assertThat(purchase.dateTime()).as("The Purchase object does not contain the expected dateTime").isEqualTo(dateTime);
    }

    @Test
    @DisplayName("Price must not be equal to zero")
    @Order(7)
    void priceMustNotBeZero() {
        assertThrows(IllegalArgumentException.class, () -> new Purchase(600678L, 0, BigDecimal.ZERO, LocalDateTime.now().minusDays(1L)),
                "Creating a Purchase with a price equal to zero should throw an IllegalArgumentException");
    }

    @Test
    @DisplayName("Price must not be less than zero")
    @Order(8)
    void pricesMustNotBeLessThanZero() {
        assertThrows(IllegalArgumentException.class, () -> new Purchase(600678L, 0, new BigDecimal("-0.01"), LocalDateTime.now().minusDays(1L)),
                "Creating a Purchase with a price less than zero should throw an IllegalArgumentException");
    }
}
