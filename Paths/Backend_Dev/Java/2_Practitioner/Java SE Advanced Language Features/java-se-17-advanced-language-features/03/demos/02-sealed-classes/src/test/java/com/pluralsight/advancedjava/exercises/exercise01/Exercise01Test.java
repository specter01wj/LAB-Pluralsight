/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

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
    @DisplayName("Interface Transaction is sealed")
    @Order(1)
    void transactionIsSealed() {
        assertThat(Transaction.class.isSealed())
                .as("Interface Transaction should be sealed")
                .isTrue();
    }

    @Test
    @DisplayName("Interface Transaction must have Purchase and Refund as implementing classes")
    @Order(2)
    void transactionPermittedSubclassesMustBePurchaseAndRefund() {
        assertThat(Transaction.class.getPermittedSubclasses()).extracting(Class::getName)
                .as("Interface Transaction must have Purchase and Refund as implementing classes")
                .containsExactlyInAnyOrder("com.pluralsight.advancedjava.exercises.exercise01.Purchase", "com.pluralsight.advancedjava.exercises.exercise01.Refund");
    }

    @Test
    @DisplayName("TransactionService.calculateNetAmount() must work as expected")
    @Order(3)
    void calculateNetAmountMustWork() {
        List<Transaction> transactions = List.of(
                new Purchase(100123L, new BigDecimal("10.00"), LocalDateTime.now().minusHours(2)),
                new Refund(100123L, new BigDecimal("8.35"), LocalDateTime.now().minusHours(1)),
                new Purchase(100345L, new BigDecimal("6.95"), LocalDateTime.now().minusMinutes(26)),
                new Refund(100456L, new BigDecimal("7.00"), LocalDateTime.now().minusMinutes(18)));

        assertThat(new TransactionService().calculateNetAmount(transactions))
                .as("TransactionService.calculateNetAmount() does not return the expected result")
                .isEqualTo(new BigDecimal("1.60"));
    }
}
