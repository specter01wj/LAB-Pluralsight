/*
 * This code is part of the course "Java SE Advanced Language Features" for Pluralsight.
 *
 * Copyright (C) 2024 by Jesper de Jong (jesper@jdj-it.com).
 */
package com.pluralsight.advancedjava.exercises.exercise04;

import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * Exercise 4: This record represents a purchase of a certain quantity of a product at a certain price, and a certain date and time.
 * <p>
 * TODO: Implement a builder for this record. Add the builder as a public static class inside the record, with the name: Builder.
 *       Add methods with the following names to the builder:
 *       - 'ofProduct' to set the productId
 *       - 'withQuantity' to set the quantity
 *       - 'forPrice' to set the price
 *       - 'atDateTime' to set the date and time
 *       - 'build' to create a new instance of Purchase with the specified values
 *       Hint: It should be possible to chain the method calls of the builder. Think about what the methods in the builder should return.
 *       Run the included unit test {@link Exercise04Test} to check if you have done this correctly.
 */
public record Purchase(long productId, int quantity, BigDecimal price, LocalDateTime dateTime) {
}
