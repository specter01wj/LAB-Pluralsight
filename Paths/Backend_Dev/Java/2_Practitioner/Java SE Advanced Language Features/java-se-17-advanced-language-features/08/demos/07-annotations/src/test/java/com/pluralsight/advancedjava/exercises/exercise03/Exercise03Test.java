/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise03;

import com.pluralsight.advancedjava.exercises.exercise02.Customer;
import org.junit.jupiter.api.*;

import java.time.LocalDate;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

@DisplayName("Exercise 3")
@Order(3)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise03Test {

    @Test
    @DisplayName("The 'formatMethodValue' method works correctly")
    @Order(1)
    void formatMethodValueWorksCorrectly() {
        var customer = new Customer();
        customer.setId(500567L);
        customer.setName("Joe Smith");
        customer.setBirthDate(LocalDate.of(1997, 7, 4));

        var result = assertDoesNotThrow(() -> AnnotationsExercise03.formatMethodValue(customer, "getBirthDate"),
                "The method 'formatMethodValue' threw an exception");

        assertThat(result)
                .as("The 'formatMethodValue' did not return the expected result")
                .isEqualTo("birthDate=[7/4/1997]");
    }
}
