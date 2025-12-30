/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise03;

import com.pluralsight.advancedjava.exercises.Customer;
import org.junit.jupiter.api.*;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 3")
@Order(3)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise03Test {

    @Test
    @DisplayName("The method 'findCustomersByEmailAddresses' works correctly")
    @Order(1)
    void findCustomersByEmailAddressesWorksCorrectly() {
        var result = Exercise03.findCustomersByEmailAddresses(List.of("joe.smith@example.com", "anna.jones@example.com", "lmiller@example.com"));

        assertThat(result)
                .as("The method 'findCustomersByEmailAddresses' did not return the expected result")
                .containsExactly(
                        new Customer(500567L, "Joe Smith", "joe.smith@example.com"),
                        new Customer(234507L, "Louise Miller", "lmiller@example.com"));
    }
}
