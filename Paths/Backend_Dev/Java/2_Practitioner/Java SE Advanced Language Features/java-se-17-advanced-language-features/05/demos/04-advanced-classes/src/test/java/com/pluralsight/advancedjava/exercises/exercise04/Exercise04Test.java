/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise04;

import org.junit.jupiter.api.*;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 4")
@Order(4)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class Exercise04Test {

    @Test
    @DisplayName("Sort products by name")
    @Order(1)
    void sortProductsByName() {
        var blueberries = new Product(100201L, "Blueberries", "Healthy blueberries");
        var oranges = new Product(100102L, "Oranges", "Delicious oranges");
        var apples = new Product(100301L, "Apples", "Red apples");

        var products = new ArrayList<>(List.of(blueberries, oranges, apples));

        new Exercise04().sortProductsByName(products);

        assertThat(products)
                .as("The method sortProductsByName() does not sort the products by name")
                .containsExactly(apples, blueberries, oranges);
    }
}
