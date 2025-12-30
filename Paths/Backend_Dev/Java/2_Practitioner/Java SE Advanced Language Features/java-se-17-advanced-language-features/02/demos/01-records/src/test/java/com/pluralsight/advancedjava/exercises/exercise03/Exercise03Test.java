/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise03;

import org.junit.jupiter.api.*;

import java.util.HashSet;
import java.util.Set;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Exercise 3")
@Order(3)
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class Exercise03Test {

    @Test
    @DisplayName("The constructor of record Product makes a copy of the set of keywords")
    @Order(1)
    void constructorMustMakeDefensiveCopy() {
        var keywords = new HashSet<String>(Set.of("food", "fruit"));
        var product = new Product(100123L, "Apples", keywords);

        keywords.add("fresh");

        assertThat(product.keywords())
                .as("The constructor of record Product did not make a copy of the set of products")
                .containsExactlyInAnyOrder("food", "fruit");
    }

    @Test
    @DisplayName("The set of keywords in a Product is unmodifiable")
    @Order(2)
    void keywordsMustBeUnmodifiable() {
        var keywords = new HashSet<String>(Set.of("food", "fruit"));
        var product = new Product(100123L, "Apples", keywords);

        try {
            product.keywords().add("fresh");
        } catch (Throwable e) {
            // Would throw an UnsupportedOperationException if done the regular way, but let the test allow other possible solutions as well
        }

        assertThat(product.keywords())
                .as("It should not be possible to modify the set of keywords in a Product")
                .containsExactlyInAnyOrder("food", "fruit");
    }
}
