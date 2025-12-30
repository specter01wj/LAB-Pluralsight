/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise01;

import com.pluralsight.advancedjava.exercises.Customer;
import org.junit.jupiter.api.*;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 1")
@Order(1)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise01Test {

    @Test
    @DisplayName("The method 'findCustomerByEmailAddress' must return an Optional of Customer")
    @Order(1)
    void findCustomerByEmailAddressMustReturnOptionalOfCustomer() {
        Object result = Exercise01.findCustomerByEmailAddress(Customer.CUSTOMERS, "lmiller@example.com");

        assertThat(result)
                .as("The method 'findCustomerByEmailAddress' does not return an Optional")
                .isNotNull()
                .isInstanceOf(Optional.class);

        @SuppressWarnings("unchecked")
        var optional = (Optional<Customer>) result;

        assertThat(optional)
                .as("The method 'findCustomerByEmailAddress' returned an empty Optional instead of an Optional with the expected Customer")
                .isNotEmpty();

        var customer = optional.orElseThrow();
        assertThat(customer)
                .as("The method 'findCustomerByEmailAddress' did not return an Optional of Customer")
                .isInstanceOf(Customer.class);
        assertThat(customer)
                .as("The method 'findCustomerByEmailAddress' did not return an Optional with the expected Customer")
                .isEqualTo(new Customer(234507L, "Louise Miller", "lmiller@example.com"));
    }

    @Test
    @DisplayName("The method 'findCustomerByEmailAddress' must return an empty Optional")
    @Order(2)
    void findCustomerByEmailAddressMustReturnEmptyOptional() {
        Object result = Exercise01.findCustomerByEmailAddress(Customer.CUSTOMERS, "someone@example.com");

        assertThat(result)
                .as("When searching for an unknown customer, the method 'findCustomerByEmailAddress' should return an empty Optional instead of null")
                .isNotNull();

        @SuppressWarnings("unchecked")
        var optional = (Optional<Customer>) result;

        assertThat(optional)
                .as("The method 'findCustomerByEmailAddress' returned a non-empty Optional when searching for an unknown customer")
                .isEmpty();

    }
}
