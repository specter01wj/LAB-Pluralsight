/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise02;

import com.pluralsight.advancedjava.exercises.Customer;
import org.junit.jupiter.api.*;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 2")
@Order(2)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise02Test {

    @Test
    @DisplayName("The method 'getCustomerName' returns the name of the customer")
    @Order(1)
    void getCustomerNameReturnsCustomerName() {
        var result = Exercise02.getCustomerName(Customer.CUSTOMERS, 478828L);

        assertThat(result)
                .as("The method 'getCustomerName' did not return the expected result")
                .isEqualTo("Will Johnson");
    }

    @Test
    @DisplayName("The method 'getCustomerName' returns 'UNKNOWN' for an unknown customer")
    @Order(2)
    void getCustomerNameReturnsUnknownForUnknownCustomer() {
        var result = Exercise02.getCustomerName(Customer.CUSTOMERS, 404404L);

        assertThat(result)
                .as("The method 'getCustomerName' did not return the expected result")
                .isEqualTo("UNKNOWN");
    }
}
